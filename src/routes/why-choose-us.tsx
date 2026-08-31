import { createFileRoute } from "@tanstack/react-router";
import {
  Gauge,
  Search,
  Smartphone,
  ShieldCheck,
  Handshake,
  Wallet,
  Clock,
  Sparkles,
} from "lucide-react";
import { CTABand, FeatureCard, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose PN Creation — Quality, Speed & Real Results" },
      {
        name: "description",
        content:
          "Direct communication with the founder, performance-first builds, mobile-perfect layouts, SEO-ready structure, honest pricing and reliable support after launch.",
      },
      { property: "og:title", content: "Why Choose PN Creation" },
      {
        property: "og:description",
        content:
          "Performance-first builds, mobile-perfect layouts, honest pricing and support you can reach.",
      },
    ],
  }),
  component: WhyChooseUs,
});

function WhyChooseUs() {
  return (
    <>
      <section className="container-page pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Be visible. Be trusted."
          highlight="Be chosen."
          description="You are not handed to a junior team or a template factory. You work directly with the founder from the first message to long after launch."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<Handshake className="h-5 w-5" />} title="Direct With The Founder">
            One point of contact who knows your project inside out — no account managers.
          </FeatureCard>
          <FeatureCard icon={<Gauge className="h-5 w-5" />} title="Built For Speed">
            Lean code and optimised assets so your pages load fast on any connection.
          </FeatureCard>
          <FeatureCard icon={<Smartphone className="h-5 w-5" />} title="Perfect On Every Device">
            Mobile-first layouts checked across phone, tablet and desktop widths.
          </FeatureCard>
          <FeatureCard icon={<Search className="h-5 w-5" />} title="SEO-Ready Structure">
            Semantic markup, unique page metadata and clean URLs from day one.
          </FeatureCard>
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="Premium Custom Design">
            Designed around your brand — never a recycled theme with your logo dropped in.
          </FeatureCard>
          <FeatureCard icon={<Wallet className="h-5 w-5" />} title="Honest Pricing">
            Clear scope and clear cost agreed upfront. No hidden add-ons later.
          </FeatureCard>
          <FeatureCard icon={<Clock className="h-5 w-5" />} title="On-Time, Every Time">
            Realistic timelines that I actually keep, with progress you can see.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="Support After Launch">
            Maintenance, backups, monitoring and quick fixes whenever you need them.
          </FeatureCard>
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="surface-card grid gap-8 p-8 sm:p-12 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Discuss",
              body: "A free consultation to understand your business, audience and goal.",
            },
            {
              step: "02",
              title: "Design & Build",
              body: "Custom design, clean development and a preview you approve before delivery.",
            },
            {
              step: "03",
              title: "Launch & Grow",
              body: "Go live with SEO in place, then maintenance and improvements over time.",
            },
          ].map((s) => (
            <div key={s.step} className="min-w-0">
              <p className="font-display text-3xl text-gold-gradient">{s.step}</p>
              <h2 className="mt-3 text-lg">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="We maintain today, you grow tomorrow."
        subtitle="Ready to be found, trusted and chosen? Let's talk about your project."
      />
    </>
  );
}
