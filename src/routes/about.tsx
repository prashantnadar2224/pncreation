import { createFileRoute } from "@tanstack/react-router";
import { Eye, Clock, HeadphonesIcon, BadgeCheck } from "lucide-react";
import { CTABand, FeatureCard, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PN Creation — Founder Prashant Nadar" },
      {
        name: "description",
        content:
          "PN Creation is a one-person digital studio led by Prashant Nadar, building websites, landing pages and brand creatives with a design-first, detail-obsessed approach.",
      },
      { property: "og:title", content: "About PN Creation — Founder Prashant Nadar" },
      {
        property: "og:description",
        content:
          "Meet Prashant Nadar, founder of PN Creation — websites, landing pages and creatives built with care.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-page pt-16 sm:pt-20">
        <SectionHeading
          align="left"
          eyebrow="About PN Creation"
          title="A studio built on"
          highlight="craft and clarity"
          description="PN Creation is led by me, Prashant Nadar. What started as a passion for clean design and clean code became a studio that helps businesses and professionals look credible online — and get real results from it."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="surface-card p-7 lg:col-span-2">
            <h2 className="text-xl">How I work</h2>
            <div className="mt-4 grid gap-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Every project starts with a conversation about your goals, your audience and what
                success looks like. From there I design, build and refine — sharing a preview
                before anything is finalised so you always know what you are getting.
              </p>
              <p>
                I handle the full stack of a digital presence: the website itself, the landing pages
                that convert, the social creatives that keep you visible, the Google Business
                Profile that gets you found locally, and the ongoing maintenance that keeps it all
                running smoothly.
              </p>
              <p>
                No bloated templates, no unnecessary plugins, no hand-off confusion. Just fast,
                accessible, well-structured work built to grow with your business.
              </p>
            </div>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Based in", value: "Navi Mumbai, MH" },
              { label: "Founded by", value: "Prashant Nadar" },
              { label: "Focus", value: "Design • Develop • Grow" },
            ].map((s) => (
              <div key={s.label} className="surface-card p-6">
                <dt className="text-xs tracking-[0.22em] text-gold uppercase">{s.label}</dt>
                <dd className="mt-2 text-lg font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page mt-24">
        <SectionHeading eyebrow="The Promise" title="What every client" highlight="can count on" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<Eye className="h-5 w-5" />} title="Preview Before Delivery">
            You review the work before anything is finalised or paid in full.
          </FeatureCard>
          <FeatureCard icon={<BadgeCheck className="h-5 w-5" />} title="Quality Work">
            High-quality output with genuine attention to detail on every screen.
          </FeatureCard>
          <FeatureCard icon={<Clock className="h-5 w-5" />} title="On-Time Delivery">
            Your time is valuable, so is mine. Deadlines are commitments.
          </FeatureCard>
          <FeatureCard icon={<HeadphonesIcon className="h-5 w-5" />} title="Free Consultation">
            Let&apos;s discuss your project and bring your ideas to life — no obligation.
          </FeatureCard>
        </div>
      </section>

      <CTABand
        title="Let's build something you're proud to share."
        subtitle="Send over your idea and I'll come back with a clear plan, timeline and price."
      />
    </>
  );
}
