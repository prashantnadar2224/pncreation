import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getVisitorFingerprint, getCreditStatus, incrementImageCredits } from "./ai-credits.server";

const IMAGE_LIMIT = 5;

const GenerateImageInput = z.object({
  prompt: z.string().min(3, "Prompt is too short").max(500, "Prompt is too long"),
});

export const getAICredits = createServerFn({ method: "GET" }).handler(async () => {
  const { ipHash, dayBucket } = await getVisitorFingerprint();
  return getCreditStatus(ipHash, dayBucket);
});

export const generateImage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => GenerateImageInput.parse(input))
  .handler(async ({ data }) => {
    const { ipHash, dayBucket } = await getVisitorFingerprint();
    const status = await getCreditStatus(ipHash, dayBucket);

    if (status.imageRemaining <= 0) {
      return {
        ok: false,
        error: "You've used all 5 free image credits for today. Come back tomorrow!",
        remaining: 0,
      } as const;
    }

    const key = process.env["LOVABLE_API_KEY"];
    if (!key) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-image-2",
        prompt: data.prompt,
        quality: "low",
        size: "1024x1024",
        n: 1,
      }),
    });

    if (!response.ok) {
      const err = (await response.json().catch(() => ({ message: "Image generation failed" }))) as {
        message?: string;
      };
      return {
        ok: false,
        error: err.message ?? `Image generation failed (${response.status})`,
        remaining: status.imageRemaining,
      } as const;
    }

    const json = (await response.json()) as { data?: { b64_json?: string }[] };
    const b64 = json.data?.[0]?.b64_json;
    if (!b64) {
      return {
        ok: false,
        error: "Image generation returned no image",
        remaining: status.imageRemaining,
      } as const;
    }

    await incrementImageCredits(ipHash, dayBucket);
    const newStatus = await getCreditStatus(ipHash, dayBucket);

    return {
      ok: true,
      image: `data:image/png;base64,${b64}`,
      remaining: newStatus.imageRemaining,
    } as const;
  });
