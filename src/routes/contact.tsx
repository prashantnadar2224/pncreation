import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL, mailtoHref } from "@/lib/contact";

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
        content:
          "Call, WhatsApp or email PN Creation for a free project consultation.",
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

type FormErrors = {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const handleClear = () => {
    setName("");
    setEmail("");
    setService("");
    setDetails("");
    setErrors({});
  };


  /**
   * Name validation:
   * - Required
   * - Minimum 2 characters
   * - Maximum 100 characters
   * - Cannot contain only spaces
   * - Allows letters and spaces only
   */
  const validateName = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return "Name is required.";
    }

    if (trimmedValue.length < 2) {
      return "Name must be at least 2 characters.";
    }

    if (trimmedValue.length > 100) {
      return "Name must not exceed 100 characters.";
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(trimmedValue)) {
      return "Name can contain letters and spaces only.";
    }

    return "";
  };

  /**
   * Email validation:
   * - Required
   * - No leading/trailing spaces
   * - Standard email format
   */
  const validateEmail = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return "Email is required.";
    }

    if (trimmedValue.length > 254) {
      return "Email address is too long.";
    }

    // Practical global email validation.
    const emailRegex =
      /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

    if (!emailRegex.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  /**
   * Project details validation:
   * - Required
   * - Minimum 10 characters
   * - Maximum 500 characters
   * - Cannot contain only spaces
   * - Allows letters, numbers and whitespace
   * - Rejects special characters
   */
  const validateDetails = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return "Project details are required.";
    }

    if (trimmedValue.length < 10) {
      return "Project details must be at least 10 characters.";
    }

    if (trimmedValue.length > 500) {
      return "Project details must not exceed 500 characters.";
    }

    if (!/^[A-Za-z0-9\s]+$/.test(trimmedValue)) {
      return "Project details can contain letters, numbers and spaces only.";
    }

    return "";
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const detailsError = validateDetails(details);

    if (nameError) {
      newErrors.name = nameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }

    if (!service) {
      newErrors.service = "Please select what you need.";
    }

    if (detailsError) {
      newErrors.details = detailsError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (value: string) => {
    setName(value);

    if (errors.name) {
      setErrors((previous) => ({
        ...previous,
        name: validateName(value),
      }));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (errors.email) {
      setErrors((previous) => ({
        ...previous,
        email: validateEmail(value),
      }));
    }
  };

  const handleServiceChange = (value: string) => {
    setService(value);

    if (errors.service) {
      setErrors((previous) => ({
        ...previous,
        service: value ? "" : "Please select what you need.",
      }));
    }
  };

  const handleDetailsChange = (value: string) => {
    // Prevent entering more than 500 characters.
    if (value.length > 500) {
      return;
    }

    setDetails(value);

    if (errors.details) {
      setErrors((previous) => ({
        ...previous,
        details: validateDetails(value),
      }));
    }
  };

  const plainMessage = `Hello PN Creation,

I would like to discuss a project with you.

Name: ${name.trim()}
Email: ${email.trim()}
Service needed: ${service}
Details: ${details.trim()}

Thank you,`;

  const message = encodeURIComponent(plainMessage);

  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Project Enquiry — ${service}`,
  )}&body=${message}`;

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    window.open(
      `https://wa.me/919653386506?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmail = () => {
    if (!validateForm()) {
      return;
    }

    window.location.href = emailHref;
  };

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
          onSubmit={handleWhatsApp}
          noValidate
        >
          <div className="grid gap-5">
            {/* Name */}
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Your name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="E.g. John Doe"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`rounded-lg border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.name
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-input"
                  }`}
              />

              {errors.name && (
                <p
                  id="name-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="E.g. john@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`rounded-lg border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-input"
                  }`}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service */}
            <div className="grid gap-2">
              <label htmlFor="service" className="text-sm font-semibold">
                What do you need? <span className="text-red-500">*</span>
              </label>

              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => handleServiceChange(e.target.value)}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={
                  errors.service ? "service-error" : undefined
                }
                className={`rounded-lg border bg-background px-4 py-3 text-sm text-gray-300 outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.service
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-input"
                  }`}
              >
                <option value="" className="text-white">Select an option...</option>

                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {errors.service && (
                <p
                  id="service-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.service}
                </p>
              )}
            </div>

            {/* Project Details */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="details" className="text-sm font-semibold">
                  Project details <span className="text-red-500">*</span>
                </label>

                <span
                  className={`text-xs ${details.length >= 500
                    ? "text-red-500"
                    : "text-muted-foreground"
                    }`}
                >
                  {details.length}/500
                </span>
              </div>

              <textarea
                id="details"
                name="details"
                value={details}
                onChange={(e) => handleDetailsChange(e.target.value)}
                rows={5}
                minLength={10}
                maxLength={500}
                placeholder="A short description of your business and what you want to achieve."
                aria-invalid={Boolean(errors.details)}
                aria-describedby={
                  errors.details ? "details-error" : undefined
                }
                className={`rounded-lg border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.details
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-input"
                  }`}
              />

              {errors.details && (
                <p
                  id="details-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.details}
                </p>
              )}

              <p className="text-xs text-muted-foreground">
                Use letters, numbers and spaces only. Minimum 10 characters.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Send on WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-secondary"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send by Email
              </button>
              <button title="Clear Form"
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Clear
              </button>
            </div>
          </div>
        </form>

        <Reveal
          as="section"
          className="surface-card min-w-0 p-7"
          delay={0.05}
        >
          <h2 className="text-lg">Direct contact</h2>

          <ul className="mt-5 grid gap-4 text-sm">
            <li>
              <a
                href="tel:+919653386506"
                className="flex items-center gap-3 hover:text-gold"
              >
                <Phone
                  className="h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />

                <span>
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Mobile
                  </span>
                  +91 96533 86506
                </span>
              </a>
            </li>

            <li>
              {/* <button
                type="button"
                onClick={handleEmail}
                className="flex w-full items-center gap-3 text-left hover:text-gold"
              >
                <Mail
                  className="h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />

                <span className="min-w-0">
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Email
                  </span>

                  <span className="break-all">{CONTACT_EMAIL}</span>
                </span>
              </button> */}
              <a
                href={mailtoHref()}
                className="flex w-full items-center gap-3 text-left hover:text-gold"
              >
                <Mail
                  className="h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />

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
                <Globe
                  className="h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />

                <span>
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    Portfolio
                  </span>

                  prashant-nadar.vercel.app
                </span>
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MapPin
                className="h-5 w-5 shrink-0 text-gold"
                aria-hidden="true"
              />

              <span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Location
                </span>

                Goregaon East, Mumbai, Maharashtra 400065.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Free consultation, preview before delivery and on-time handover on
            every project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}