import { createFileRoute } from "@tanstack/react-router";
import {
  Globe2,
  FileText,
  Mail,
  Instagram,
  Film,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { CTABand, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development, Design & Digital Growth | PN Creation" },
      {
        name: "description",
        content:
          "Websites, landing pages, portfolios, website maintenance, resume design, invitations, social media creatives, video editing and Google Business Profile setup.",
      },
      { property: "og:title", content: "Services | PN Creation" },
      {
        property: "og:description",
        content:
          "Full list of PN Creation services: web development, design, video editing, creatives and digital profile setup.",
      },
    ],
  }),
  component: Services,
});

const groups: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: Globe2,
    title: "Web Development",
    items: [
      "Portfolio websites",
      "Business websites",
      "Landing pages that convert",
      "QR-based surprise websites",
      "Event & celebration websites",
      "Website maintenance & bug fixing",
      "UI/UX improvements & responsive design",
    ],
  },
  {
    icon: FileText,
    title: "Resume Design",
    items: [
      "Select from 120+ templates",
      "ATS-friendly resume creation",
      "Resume update & refresh",
      "Cover letter writing",
      "LinkedIn profile optimization",
    ],
  },
  {
    icon: Mail,
    title: "Invitation Design",
    items: [
      "Birthday invitations",
      "Wedding invitations",
      "Wedding video invitations",
      "Custom invitation designs",
      "All-occasion invitations",
    ],
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    items: [
      "Instagram posts & stories",
      "Facebook posts & stories",
      "YouTube thumbnails",
      "Social media banners",
      "Creative designs for all platforms",
    ],
  },
  {
    icon: Film,
    title: "Video Services",
    items: [
      "Video editing (trim, cut, merge)",
      "Add / remove sound",
      "Text, stickers & effects",
      "Reels, shorts & promo videos",
      "Short video creation",
    ],
  },
  {
    icon: Settings,
    title: "Other Services",
    items: [
      "Google Business Profile creation & update",
      "Gift cards & coupon codes",
      "Custom digital banners",
      "Festival banners",
      "QR code generation",
      "Digital profile setup",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="container-page pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Services I Offer"
          title="Design, develop, edit,"
          highlight="deliver"
          description="A complete menu of digital services — pick one, or let me handle your entire online presence end to end."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <article key={title} className="surface-card h-full p-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="gold-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="truncate text-lg">{title}</h2>
              </div>
              <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title="Not sure which service fits?"
        subtitle="Free consultation — describe your goal and I'll recommend the shortest path to it."
      />
    </>
  );
}
