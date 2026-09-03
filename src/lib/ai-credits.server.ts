import { createHash } from "crypto";
import { getRequestIP } from "@tanstack/react-start/server";

const IMAGE_DAILY_LIMIT = 5;
const VIDEO_DAILY_LIMIT = 1;

export function hashIP(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

export function getVisitorFingerprint(): { ip: string; ipHash: string; dayBucket: string } {
  const rawIP = getRequestIP();
  const ip = String(rawIP ?? "unknown");
  const ipHash = hashIP(ip);
  const dayBucket = new Date().toISOString().split("T")[0];
  return { ip, ipHash, dayBucket };
}

export type CreditStatus = {
  imageUsed: number;
  videoUsed: number;
  imageRemaining: number;
  videoRemaining: number;
};

export async function getCreditStatus(ipHash: string, dayBucket: string): Promise<CreditStatus> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("ai_credit_usage")
    .select("image_used, video_used")
    .eq("ip_hash", ipHash)
    .eq("day_bucket", dayBucket)
    .maybeSingle();

  const imageUsed = data?.image_used ?? 0;
  const videoUsed = data?.video_used ?? 0;
  return {
    imageUsed,
    videoUsed,
    imageRemaining: Math.max(0, IMAGE_DAILY_LIMIT - imageUsed),
    videoRemaining: Math.max(0, VIDEO_DAILY_LIMIT - videoUsed),
  };
}

export async function incrementImageCredits(ipHash: string, dayBucket: string): Promise<void> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("ai_credit_usage")
    .select("id, image_used")
    .eq("ip_hash", ipHash)
    .eq("day_bucket", dayBucket)
    .maybeSingle();

  if (data) {
    await supabaseAdmin
      .from("ai_credit_usage")
      .update({ image_used: data.image_used + 1, updated_at: new Date().toISOString() })
      .eq("id", data.id);
  } else {
    await supabaseAdmin.from("ai_credit_usage").insert({
      ip_hash: ipHash,
      day_bucket: dayBucket,
      image_used: 1,
      video_used: 0,
    });
  }
}

export async function incrementVideoCredits(ipHash: string, dayBucket: string): Promise<void> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("ai_credit_usage")
    .select("id, video_used")
    .eq("ip_hash", ipHash)
    .eq("day_bucket", dayBucket)
    .maybeSingle();

  if (data) {
    await supabaseAdmin
      .from("ai_credit_usage")
      .update({ video_used: data.video_used + 1, updated_at: new Date().toISOString() })
      .eq("id", data.id);
  } else {
    await supabaseAdmin.from("ai_credit_usage").insert({
      ip_hash: ipHash,
      day_bucket: dayBucket,
      image_used: 0,
      video_used: 1,
    });
  }
}
