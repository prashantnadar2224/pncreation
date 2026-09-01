import { Link } from "@tanstack/react-router";
import logo from "@/assets/PN_Creation_White_Logo.jpg";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="PN Creation home">
      <img
        src={logo}
        alt="PN Creation logo"
        className="h-15 shrink-0 rounded-full bg-gold-soft object-contain p-0.5"
      />
      <span className="min-w-0">
        <span className="block truncate font-display text-lg leading-none font-extrabold tracking-tight">
          PN CREATION
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.6rem] tracking-[0.28em] text-gold uppercase">
            Design • Develop • Grow
          </span>
        )}
      </span>
    </Link>
  );
}
