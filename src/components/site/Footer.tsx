import { Link } from "@tanstack/react-router";
import { Mail, Phone, Heart, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, mailtoHref } from "@/lib/contact";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We design, develop and grow digital presence for businesses and professionals —
            websites, landing pages, branding creatives and complete online setup.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-gold uppercase">Explore</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/why-choose-us", label: "Why Choose Us" },
              { to: "/tools", label: "Free Tools" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-gold uppercase">Get in touch</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-gold"
                href="tel:+919653386506"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> +91 96533 86506
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 break-all hover:text-gold"
                href={mailtoHref()}
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>

            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-gold"
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Prashant%2C%20I%20found%20PN%20Creation%20and%20I%27d%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5">
        {/* <p className="container-page text-xs text-muted-foreground">
          © {new Date().getFullYear()} PN Creation — Founded by{" "}
          <a
            className="inline-flex items-center gap-2 hover:underline underline-offset-3 text-gold"
            href="https://prashant-nadar.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prashant Nadar.
          </a>{" "}
        </p> */}
        <p className="container-page text-xs text-muted-foreground">
          © {new Date().getFullYear()} PN Creation — Made with{" "}
          <span className="mx-1 text-lg inline-block text-red-500 animate-pulse" aria-label="love">
            <Heart className="h-4 w-4 fill-red-500" aria-hidden="true" />
          </span>{" "}
          by{" "}
          <a
            className="font-medium text-gold transition-colors hover:text-gold/80 hover:underline underline-offset-4"
            href="https://prashant-nadar.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prashant Nadar
          </a>
        </p>
      </div>
    </footer>
  );
}
