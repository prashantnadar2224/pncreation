CREATE TABLE public.ai_credit_usage (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_hash text NOT NULL,
    day_bucket date NOT NULL DEFAULT CURRENT_DATE,
    image_used integer NOT NULL DEFAULT 0 CHECK (image_used >= 0),
    video_used integer NOT NULL DEFAULT 0 CHECK (video_used >= 0),
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE(ip_hash, day_bucket)
);

GRANT ALL ON public.ai_credit_usage TO service_role;

ALTER TABLE public.ai_credit_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_full_access" ON public.ai_credit_usage FOR ALL TO service_role USING (true) WITH CHECK (true);