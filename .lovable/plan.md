# Plan: AI Image & Video Creator with Per-User Free Credits

Yes — if credits are tracked per user, one person using their 5 credits does not block another user. Each visitor gets their own allocation.

## Important reality check
There is no stable, free public API for quality AI image or video generation. Free tiers have strict limits, rate blocks, or shut down. The practical path is to power generation through **Lovable AI** (your workspace credits pay per request) and enforce per-visitor limits so the app stays affordable.

## Proposed scope

1. **Enable Lovable Cloud** backend so credits can be tracked per IP/session, not just browser-local storage.
2. **Credit ledger table** (e.g., `ai_credits`) keyed by IP hash + daily bucket, with a 5-credit daily allowance per visitor.
3. **AI Image Creator route** (`/ai-image`) with a prompt input, image generation via Lovable AI Gateway, and live credit counter.
4. **AI Video Creator route** (`/ai-video`) with a prompt input, video generation via Lovable AI Gateway, and a separate small credit cap (e.g., 1 video per visitor per day, because video is ~100x more expensive than an image).
5. **Add site navigation** to Header for the new routes, and link them from a Tools/Freebies section.
6. **Credit guard**: server-side check before every generation; if credits are exhausted, return a friendly "come back tomorrow" message instead of generating.

## Technical details
- **Backend**: `createServerFn` or server route to read IP, check remaining credits, and call the Lovable AI Gateway.
- **Image generation**: use the `/v1/images/generations` endpoint with streaming preview and a final image download.
- **Video generation**: use the `/v1/videos` async job endpoint; poll status, then show the completed MP4.
- **Credit tracking**: store counts in a Lovable Cloud table with `GRANT` and RLS policies so only the server can write, visitors can only read their own daily tally.
- **UI**: match the existing emerald/gold design, scroll-reveal animations, responsive layout, and download buttons.

## Questions
- Should I build **image only** first, or **image + video** together?
- Should the daily limit be **5 image generations + 0 videos** (safer on credits) or **5 images + 1 video**?
