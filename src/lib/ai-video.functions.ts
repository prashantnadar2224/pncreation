import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getVisitorFingerprint, getCreditStatus, incrementVideoCredits } from "./ai-credits.server";

const VIDEO_LIMIT = 1;

const CreateVideoInput = z.object({
  prompt: z.string().min(3, "Prompt is too short").max(500, "Prompt is too long"),
});

const PollVideoInput = z.object({
  jobId: z.string().min(1, "Job ID is required"),
});

export const createVideoJob = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CreateVideoInput.parse(input))
  .handler(async ({ data }) => {
    const { ipHash, dayBucket } = await getVisitorFingerprint();
    const status = await getCreditStatus(ipHash, dayBucket);

    if (status.videoRemaining <= 0) {
      return {
        ok: false,
        error: "You've used your free video credit for today. Come back tomorrow!",
        remaining: 0,
      } as const;
    }

    const key = process.env["LOVABLE_API_KEY"];
    if (!key) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/videos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-omni-1.1-flash",
        input: data.prompt,
        response_format: {
          type: "video",
          resolution: "720p",
          duration: "5s",
          aspect_ratio: "16:9",
        },
      }),
    });

    if (!response.ok) {
      const err = (await response.json().catch(() => ({ message: "Video generation failed" }))) as {
        message?: string;
      };
      return {
        ok: false,
        error: err.message ?? `Video generation failed (${response.status})`,
        remaining: status.videoRemaining,
      } as const;
    }

    const job = (await response.json()) as {
      id: string;
      status: string;
    };

    await incrementVideoCredits(ipHash, dayBucket);
    const newStatus = await getCreditStatus(ipHash, dayBucket);

    return {
      ok: true,
      jobId: job.id,
      status: job.status,
      remaining: newStatus.videoRemaining,
    } as const;
  });

export const pollVideoJob = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PollVideoInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const jobRes = await fetch(`https://ai.gateway.lovable.dev/v1/videos/${data.jobId}`, {
      headers: { Authorization: `Bearer ${key}` },
    });

    if (!jobRes.ok) {
      const err = (await jobRes.json().catch(() => ({ message: "Video poll failed" }))) as {
        message?: string;
      };
      return {
        ok: false,
        error: err.message ?? `Video poll failed (${jobRes.status})`,
      } as const;
    }

    const job = (await jobRes.json()) as {
      id: string;
      status: string;
      progress?: number;
      error?: { message?: string };
    };

    if (job.status === "failed") {
      return {
        ok: false,
        error: job.error?.message ?? "Video generation failed",
      } as const;
    }

    if (job.status !== "completed") {
      return {
        ok: true,
        status: job.status,
        progress: job.progress ?? 0,
      } as const;
    }

    // Completed: download MP4 and upload to storage for a persistent signed URL.
    const videoRes = await fetch(`https://ai.gateway.lovable.dev/v1/videos/${data.jobId}/content`, {
      headers: { Authorization: `Bearer ${key}` },
    });

    if (!videoRes.ok) {
      return {
        ok: false,
        error: `Failed to download completed video (${videoRes.status})`,
      } as const;
    }

    const blob = await videoRes.blob();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const path = `generated-videos/${data.jobId}.mp4`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from("generated-videos")
      .upload(path, blob, { contentType: "video/mp4", upsert: true });

    if (uploadError) {
      return {
        ok: false,
        error: uploadError.message,
      } as const;
    }

    const { data: signedData, error: signedError } = await supabaseAdmin.storage
      .from("generated-videos")
      .createSignedUrl(path, 60 * 60);

    if (signedError || !signedData?.signedUrl) {
      return {
        ok: false,
        error: signedError?.message ?? "Could not create video URL",
      } as const;
    }

    return {
      ok: true,
      status: "completed",
      url: signedData.signedUrl,
    } as const;
  });
