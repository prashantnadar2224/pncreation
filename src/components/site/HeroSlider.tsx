import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { src: hero1, alt: "Business website built by PN Creation shown on a laptop", label: "Business Websites" },
  { src: hero2, alt: "Responsive landing page design on phone and tablet", label: "Landing Pages" },
  { src: hero3, alt: "Dark premium portfolio website design on a laptop", label: "Portfolio Websites" },
  { src: hero4, alt: "Google Business Profile listing shown on a phone", label: "Google Business Profile" },
  { src: hero5, alt: "Website maintenance, security and performance concept", label: "Maintenance & Speed" },
];

const INTERVAL = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, index]);

  const current = slides[index];

  return (
    <div
      className="surface-card gold-ring relative min-w-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="PN Creation work highlights"
    >
      <div className="relative aspect-[4/3] w-full">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={index}
            src={current.src}
            alt={current.alt}
            width={1280}
            height={960}
            fetchPriority={index === 0 ? "high" : "low"}
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />

        <p className="absolute bottom-16 left-5 text-sm font-bold tracking-[0.18em] text-gold uppercase sm:left-7">
          {current.label}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/70 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${s.label}`}
              onClick={() => go(i)}
              className={
                i === index
                  ? "h-2 w-7 rounded-full bg-primary transition-all"
                  : "h-2 w-2 rounded-full bg-border transition-all hover:bg-gold/60"
              }
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
