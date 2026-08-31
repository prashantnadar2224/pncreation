import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.28em] text-gold uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
        {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="surface-card h-full p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="gold-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-gold">
        {icon}
      </div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </article>
  );
}

export function CTABand({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="container-page mt-24">
      <div className="surface-card gold-ring grid gap-6 p-8 sm:p-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start a Project
          </Link>
          <a
            href="https://wa.me/919653386506"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full border border-gold/50 px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-secondary"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
