import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL } from "@/lib/contact";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PN Creation — Free Consultation" },
      {
        name: "description",
        content:
          "Contact PN Creation for websites, landing pages and design work. Call +91 96533 86506, WhatsApp or email hello.pncreation@gmail.com for a free consultation.",
      },
      { property: "og:title", content: "Contact PN Creation" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email PN Creation for a free project consultation.",
      },
    ],
  }),
  component: Contact,
});

const services = [
  "Website Development",
  "Landing Page",
  "Portfolio Website",
  "Website Maintenance",
  "Google Business Profile",
  "Resume / Invitation Design",
  "Social Media / Video",
  "Something else",
];

function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [details, setDetails] = useState("");

  const plainMessage = `Hello PN Creation,

I would like to discuss a project with you.

Name: ${name || "-"}
Service needed: ${service}
Details: ${details || "-"}

Thank you,`;
  const message = encodeURIComponent(plainMessage);
  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Project Enquiry — ${service}`,
  )}&body=${message}`;

  return (
    <section className="container-page pt-16 sm:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Let's Work Together"
          title="Tell me about your"
          highlight="project"
          description="Fill in a few details and send it straight to my WhatsApp or email — you'll get a reply with a clear plan, timeline and price."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">

        <form
          className="surface-card min-w-0 p-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/919653386506?text=${message}`, "_blank", "noopener");
          }}
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Your name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Prashant Nadar"
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="service" className="text-sm font-semibold">
                What do you need?
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="details" className="text-sm font-semibold">
                Project details
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={5}
                placeholder="A short description of your business and what you want to achieve."
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
              </button>
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-secondary"
              >
                <Send className="h-4 w-4" aria-hidden="true" /> Send by Email
              </a>
            </div>
          </div>
        </form>

        <aside className="surface-card min-w-0 p-7">
          <h2 className="text-lg">Direct contact</h2>
          <ul className="mt-5 grid gap-4 text-sm">
            <li>
              <a href="tel:+919653386506" className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Mobile
                  </span>
                  +91 96533 86506
                </span>
              </a>
            </li>
            <li>
              <a href={emailHref} className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Email
                  </span>
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://prashant-nadar.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-gold"
              >
                <Globe className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Portfolio
                  </span>
                  prashant-nadar.vercel.app
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Location
                </span>
                Navi Mumbai, Maharashtra 400706
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Free consultation, preview before delivery and on-time handover on every project.
          </p>
        </aside>
      </div>
    </section>
  );
}
