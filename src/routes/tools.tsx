import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Download, Link2, QrCode, Type } from "lucide-react";
import { CTABand, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Free Business Tools — QR Codes, Slugs & Content Counter | PN Creation" },
      {
        name: "description",
        content:
          "Free tools by PN Creation: generate a downloadable QR code for any link, build SEO-friendly URL slugs and count words, characters and reading time.",
      },
      { property: "og:title", content: "Free Business Tools | PN Creation" },
      {
        property: "og:description",
        content: "Generate QR codes, SEO slugs and content stats instantly — free, no signup.",
      },
    ],
  }),
  component: Tools,
});

function QrTool() {
  const [value, setValue] = useState("https://prashant-nadar.vercel.app/");
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    if (!value.trim()) {
      setDataUrl("");
      return;
    }
    void (async () => {
      try {
        const QRCode = (await import("qrcode")).default;
        const url = await QRCode.toDataURL(value.trim(), {
          width: 512,
          margin: 2,
          color: { dark: "#12321f", light: "#ffffff" },
        });
        if (active) {
          setDataUrl(url);
          setError("");
        }
      } catch {
        if (active) setError("Could not generate a QR code for that text.");
      }
    })();
    return () => {
      active = false;
    };
  }, [value]);

  return (
    <article className="surface-card p-7">
      <ToolHead icon={<QrCode className="h-5 w-5" />} title="QR Code Generator">
        Turn any link, UPI ID or text into a high-resolution QR code you can download and print.
      </ToolHead>

      <label htmlFor="qr" className="mt-6 block text-sm font-semibold">
        Link or text
      </label>
      <input
        id="qr"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      {dataUrl && (
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <img
            src={dataUrl}
            alt="Generated QR code"
            width={160}
            height={160}
            className="h-40 w-40 rounded-xl bg-white p-2"
          />
          <a
            href={dataUrl}
            download="pn-creation-qr.png"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Download PNG
          </a>
        </div>
      )}
    </article>
  );
}

function SlugTool() {
  const [text, setText] = useState("Best Web Designer in Navi Mumbai");
  const slug = useMemo(
    () =>
      text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"),
    [text],
  );

  return (
    <article className="surface-card p-7">
      <ToolHead icon={<Link2 className="h-5 w-5" />} title="SEO Slug Builder">
        Convert a page title into a clean, search-friendly URL slug.
      </ToolHead>

      <label htmlFor="slug" className="mt-6 block text-sm font-semibold">
        Page title
      </label>
      <input
        id="slug"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />

      <p className="mt-5 text-xs tracking-[0.2em] text-gold uppercase">Result</p>
      <p className="mt-2 rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm break-all">
        /{slug || "your-page-title"}
      </p>
    </article>
  );
}

function CounterTool() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const stats = [
    { label: "Words", value: words },
    { label: "Characters", value: text.length },
    { label: "Sentences", value: text.split(/[.!?]+\s|[.!?]+$/).filter(Boolean).length },
    { label: "Read time", value: `${Math.max(1, Math.round(words / 200))} min` },
  ];

  return (
    <article className="surface-card p-7 lg:col-span-2">
      <ToolHead icon={<Type className="h-5 w-5" />} title="Content Counter">
        Check word count, character count and reading time before you publish a post or caption.
      </ToolHead>

      <label htmlFor="content" className="mt-6 block text-sm font-semibold">
        Paste your content
      </label>
      <textarea
        id="content"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a caption, bio or blog draft here…"
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />

      <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background/50 p-4">
            <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">{s.label}</dt>
            <dd className="mt-1 font-display text-2xl text-gold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function ToolHead({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex min-w-0 items-center gap-3">
        <span className="gold-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gold">
          {icon}
        </span>
        <h2 className="truncate text-lg">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function Tools() {
  return (
    <>
      <section className="container-page pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Free Tools"
          title="Handy tools, free to"
          highlight="use right here"
          description="Small utilities I use on client projects — no signup, nothing stored, everything runs in your browser."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <QrTool />
          <SlugTool />
          <CounterTool />
        </div>
      </section>

      <CTABand
        title="Need something custom built?"
        subtitle="Calculators, booking forms, QR-based surprise pages — I build tools around your business."
      />
    </>
  );
}
