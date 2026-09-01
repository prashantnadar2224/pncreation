import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Gauge,
  Globe2,
  Layers,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { CTABand, FeatureCard, SectionHeading } from "@/components/site/ui";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PN Creation — Websites That Build Your Business" },
      {
        name: "description",
        content:
          "Modern, responsive and SEO-friendly websites, landing pages, portfolios and digital creatives by PN Creation. Design • Develop • Grow.",
      },
      { property: "og:title", content: "PN Creation — Websites That Build Your Business" },
      {
        property: "og:description",
        content:
          "Websites, landing pages, portfolios, maintenance and Google Business Profile setup by PN Creation.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: <Code2 className="h-5 w-5" />, title: "Clean, Optimized Code" },
  { icon: <Smartphone className="h-5 w-5" />, title: "Fully Responsive" },
  { icon: <Gauge className="h-5 w-5" />, title: "Fast Loading" },
  { icon: <Rocket className="h-5 w-5" />, title: "SEO Friendly" },
];

function Home() {
  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Design • Develop • Grow
            </p>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Building Websites
              <br />
              That Build <span className="text-gold-gradient">Your Business</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m Prashant Nadar, founder of PN Creation. I build fast, secure and scalable
              websites — plus the landing pages, creatives and profile setups that get you found
              and chosen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Let&apos;s Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-gold/50 px-6 py-3.5 text-sm font-bold text-gold transition-colors hover:bg-secondary"
              >
                View Services
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.title} className="min-w-0">
                  <dt className="text-gold">{h.icon}</dt>
                  <dd className="mt-2 text-sm font-semibold">{h.title}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="surface-card gold-ring min-w-0 p-6 sm:p-8">
            <h2 className="text-xl">What you get with every project</h2>
            <ul className="mt-5 grid gap-4 text-sm">
              {[
                "Custom design shaped around your brand, not a template",
                "Preview before final delivery — no surprises",
                "Mobile-first layouts tested on real device widths",
                "On-page SEO, metadata and performance tuning",
                "Ongoing maintenance and support when you need it",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-flex items-center gap-2 text-xs tracking-wide text-gold uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Navi Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <SectionHeading
          eyebrow="Core Services"
          title="Everything you need to"
          highlight="go live and grow"
          description="From the first pixel to long-term maintenance — one place for your complete online presence."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Globe2 className="h-5 w-5" />} title="Website Development">
            Fast, secure and scalable business and portfolio websites with clean, optimized code.
          </FeatureCard>
          <FeatureCard icon={<Rocket className="h-5 w-5" />} title="Landing Pages That Convert">
            High-converting pages with clear messaging built to turn visitors into customers.
          </FeatureCard>
          <FeatureCard icon={<Layers className="h-5 w-5" />} title="Design & Creatives">
            Resumes, invitations, social media posts, banners and video edits with a premium finish.
          </FeatureCard>
          <FeatureCard icon={<MapPin className="h-5 w-5" />} title="Google Business Profile">
            Profile creation and optimization so local customers find you on Search and Maps.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="Website Maintenance">
            Updates, security monitoring, backups, bug fixes and performance tuning.
          </FeatureCard>
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="Free Online Tools">
            QR codes, slug builder and content counter — use them right here on the site.
          </FeatureCard>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline"
          >
            See the full service list <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTABand
        title="Your business deserves to be found."
        subtitle="Tell me what you need — you get a free consultation and a preview before delivery."
      />
    </>
  );
}
