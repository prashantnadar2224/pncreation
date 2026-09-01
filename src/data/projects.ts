export interface CaseStudy {
  summary: string;
  problem: string[];
  approach: string[];
  results: {
    label: string;
    value: string;
    detail: string;
  }[];
  outcome: string[];
  role: string;
  timeline: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  image: string;
  alt: string;
  stack: string[];
  features: string[];
  live?: string;
  status: "live" | "building";
  featured?: boolean;
  note?: string;
  caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    slug: "universal-tools",
    title: "Universal Tools",
    subtitle: "universaltools.in — 110+ browser-based utilities in one platform",
    overview:
      "My own live product: a fast, ad-light multi-utility platform bundling 110+ text, PDF, image, code, color, password and productivity tools behind a single modular interface. Accounts, search and usage data are backed by PostgreSQL, while the heavy processing runs client-side so nothing leaves the user's device.",
    image: "/project-tools.avif",
    alt: "Universal Tools homepage with the one toolkit hero, tool category navigation and search bar",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js API",
      "Lazy Loading",
      "Modular Architecture",
      "SEO",
      "Responsive UI",
    ],
    features: [
      "110+ tools across text, PDF, image, code, color, password and productivity categories",
      "Global Ctrl/⌘K command search across every tool with instant filtering",
      "Fully responsive across mobile, tablet, laptop and large monitors",
      "Desktop Lighthouse audit: 96 Performance, 100 Accessibility, 100 Best Practices and 100 SEO",
      "PostgreSQL-backed accounts, auth (log in / sign up) and usage persistence",
      "Privacy-first: file and text processing runs in the browser — no uploads",
      "Lazy-loaded modular routing keeps the initial bundle lean and first paint fast",
      "Built-in dark mode with remembered preference",
      "SEO-optimised tool pages with semantic markup and per-tool metadata",
    ],
    live: "https://universaltools.in/",
    status: "live",
    featured: true,
    note: "Live in production, actively maintained — new tools ship regularly.",
    caseStudy: {
      summary:
        "Building and shipping a 110+ tool platform that stays fast, private and easy to extend as a solo developer.",
      role: "Product owner, frontend architect and developer",
      timeline: "Ongoing — continuously shipped since launch",
      problem: [
        "Everyday utilities — PDF merging, text cleanup, image conversion, colour and password tools — are scattered across dozens of ad-heavy sites with inconsistent UX.",
        "Most of those sites upload user files to a server, which is a genuine privacy problem for documents and credentials.",
        "A single app holding 110+ tools would normally ship a huge JavaScript bundle and collapse under its own weight.",
      ],
      approach: [
        "Designed a modular tool registry so each tool is a self-contained module with its own metadata, route and lazy-loaded chunk.",
        "Moved processing into the browser using native Web APIs, so files and text never leave the user's device.",
        "Added a global Ctrl/⌘K command palette so users reach any tool in two keystrokes instead of navigating category menus.",
        "Backed accounts, saved preferences and usage data with PostgreSQL behind a Node.js API, keeping the frontend stateless.",
        "Made every tool page SEO-complete: unique title, description, semantic headings and structured markup.",
      ],
      results: [
        {
          label: "Tools shipped",
          value: "110+",
          detail: "across 8 categories",
        },
        {
          label: "Uploads required",
          value: "0",
          detail: "processing runs client-side",
        },
        {
          label: "Initial bundle",
          value: "Lean",
          detail: "route-level code splitting",
        },
        {
          label: "Devices supported",
          value: "All",
          detail: "320px phone to ultrawide",
        },
      ],
      outcome: [
        "Adding a new tool is now a single module drop-in — no changes to routing, search or navigation.",
        "The lazy-loaded architecture keeps first paint fast even as the catalogue keeps growing.",
        "Per-tool metadata means each utility can rank on its own search intent instead of competing with the homepage.",
      ],
    },
  },

  {
    slug: "prashant-nadar-portfolio",
    title: "Prashant Nadar — Developer Portfolio",
    subtitle: "prashant-nadar.vercel.app — Personal portfolio & professional web presence",
    overview:
      "My own portfolio website, designed and developed to showcase my frontend engineering work, professional background and web development services. The site focuses on a clean, responsive experience with clear project presentation, strong typography, smooth interactions and a performance-first approach.",
    image: "/portfolio-screenshot.png",
    alt: "Prashant Nadar developer portfolio homepage",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Router",
      "Responsive UI",
      "SEO",
      "Accessibility",
    ],
    features: [
      "Single-page navigation with smooth scrolling between portfolio sections, Active header navigation automatically highlights the section currently in view",
      "Built-in dark mode for a comfortable viewing experience in different environments",
      "Contact form submissions are delivered directly to my mailbox for immediate notification",
      "One-click WhatsApp contact and email contact with a prefilled enquiry message and for faster communication",
      "Desktop Lighthouse audit: 98 Performance, 93 Accessibility, 100 Best Practices and 92 SEO",
      "Responsive portfolio experience across mobile, tablet and desktop",
      "Project showcase for live, client and work-in-progress projects",
      "Smooth reveal animations and interactive UI using Framer Motion",
      "SEO-ready page structure and metadata",
      "Clear conversion paths for businesses looking for custom website development",
    ],
    live: "https://prashant-nadar.vercel.app/",
    status: "live",
    note: "My own portfolio website — built and maintained to represent my frontend engineering work and web development services.",
    caseStudy: {
      summary:
        "Building a professional digital presence that represents both my frontend engineering capabilities and my website development services.",
      role: "Designer & frontend developer",
      timeline: "Ongoing — continuously improved and maintained",
      problem: [
        "I needed a professional online presence that could communicate both my technical capabilities and the website development services I offer to businesses.",
        "The portfolio needed to showcase real production work without feeling like a simple collection of project screenshots.",
        "The experience also needed to remain fast, responsive and easy to maintain as new projects and experience are added.",
      ],
      approach: [
        "Built the portfolio using a component-driven React architecture with TypeScript for maintainable and predictable code.",
        "Designed the interface around clear content hierarchy, strong typography, responsive layouts and subtle motion.",
        "Created dedicated project presentation areas so visitors can understand the work, technology and outcomes behind each project.",
        "Structured the site to support both professional opportunities and business enquiries for custom website development.",
        "Kept performance, accessibility and responsive behaviour in mind throughout the implementation.",
      ],
      results: [
        {
          label: "Purpose",
          value: "Dual-use",
          detail: "career + business enquiries",
        },
        {
          label: "Responsive",
          value: "Yes",
          detail: "mobile to desktop",
        },
        {
          label: "Architecture",
          value: "Component-based",
          detail: "React + TypeScript",
        },
        {
          label: "Status",
          value: "Live",
          detail: "actively maintained",
        },
      ],
      outcome: [
        "The portfolio provides a single professional destination for showcasing my production work and frontend engineering experience.",
        "Businesses can quickly understand the services I offer and review examples of websites I have built.",
        "The codebase is structured to make adding new projects, experience and content straightforward over time.",
      ],
    },
  },

  {
    slug: "power-consilium-system",
    title: "Power Consilium System",
    subtitle: "power-consilium.com — Pan India UPS AMC & power infrastructure",
    overview:
      "A corporate website for Power Consilium System (PCS), a Mumbai-based UPS and power infrastructure company established in 2013. Founded by senior executives with deep expertise across APC-MGE, Emerson and Numeric, the site presents pan-India AMC services, products and enquiry channels through a bold hero slider and conversion-focused layout.",
    image: "/project-pcs.avif",
    alt: "Power Consilium System website hero showing Pan India UPS AMC and services",
    stack: ["React", "TypeScript", "PHP", "Tailwind CSS", "Responsive UI", "Dark Mode", "SEO"],
    features: [
      "Admin-controlled dynamic hero banner — images, headings and positions editable after login, no redeploy needed",
      "Multi-screen routing with React Router for services, products and company pages",
      "Code splitting, lazy loading and error boundaries keep the app fast and crash-safe",
      "Desktop Lighthouse audit: 99 Performance, 90 Accessibility, 96 Best Practices and 92 SEO",
      "Scroll-reveal animations that stay smooth on low-end devices",
      "Responsive images with next-gen formats for fast first paint on any connection",
      "Clients & partners showcase built as a reusable, data-driven component",
      "Google Maps directions plus one-tap WhatsApp, call and email redirection",
      "Fully responsive across mobile to large monitors, with built-in dark mode",
    ],
    live: "https://power-consilium.com/",
    status: "live",
    featured: false,
    note: "Live corporate site — serving corporate and IT clients pan India since 2013.",
    caseStudy: {
      summary:
        "Turning a service-heavy UPS business into a credible, self-manageable web presence that converts enquiries.",
      role: "Frontend developer",
      timeline: "Delivered as a full build, maintained since",
      problem: [
        "A B2B power infrastructure company with pan-India operations had no web presence that reflected its scale or technical depth.",
        "Marketing needed to change hero campaigns and banner copy frequently, but had no way to do it without a developer.",
        "Prospects arrive from search and referrals on mobile, and needed to call, message or find the office in one tap.",
      ],
      approach: [
        "Built an admin-authenticated hero banner manager so images, headings and text positions can be updated live — no redeploy.",
        "Structured the site into routed sections (services, products, company) with React Router instead of one long scroll.",
        "Applied code splitting, lazy loading and error boundaries so a single failing widget never blanks the page.",
        "Served responsive images in next-gen formats and tuned scroll-reveal animations to stay smooth on low-end Android devices.",
        "Wired Google Maps directions plus one-tap WhatsApp, call and email redirection into every contact touchpoint.",
      ],
      results: [
        {
          label: "Banner updates",
          value: "Self-serve",
          detail: "admin login, zero dev time",
        },
        {
          label: "Contact paths",
          value: "4",
          detail: "call, WhatsApp, email, maps",
        },
        {
          label: "Crash safety",
          value: "Guarded",
          detail: "error boundaries per route",
        },
        {
          label: "Theme",
          value: "Light + dark",
          detail: "preference remembered",
        },
      ],
      outcome: [
        "The marketing team runs campaign changes independently, which removed the developer bottleneck entirely.",
        "Mobile visitors reach a human in one tap, which is where most of the AMC enquiries now originate.",
        "Routed pages give each service line its own indexable URL instead of a hidden anchor.",
      ],
    },
  },

  {
    slug: "ask-legal-vision",
    title: "Ask Legal Vision",
    subtitle: "Live website for Adv. Aditya Shankar Kharche — Bombay High Court",
    overview:
      'A production legal-services website for a Bombay High Court advocate with 20+ years in employment law, civil litigation and compliance. Built around a strong "Precision Legal Strategy for a Fast-Moving World" hero, clear consultation CTAs, service breakdown, testimonials and direct contact — backed by a MySQL (phpMyAdmin) driven enquiry flow.',
    image: "/project-legal.avif",
    alt: "Ask Legal Vision website homepage with hero section and practice areas",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "MySQL / phpMyAdmin",
      "Responsive UI",
      "SEO",
    ],
    features: [
      "Desktop Lighthouse audit: 100 Performance, 100 Accessibility, 100 Best Practices and 91 SEO",
      "Hero with Book a Consultation and Call Now conversion CTAs",
      "About section for Adv. Aditya Shankar Kharche — 20+ years, Bar Council of Maharashtra & Goa",
      "Five service areas: property litigation, employment & labour law, corporate & HR legal advisory, legal drafting & compliance, and legal trainings",
      "Client testimonials plus phone and email contact for direct enquiries",
      "MySQL-backed enquiry storage managed through phpMyAdmin",
      "Fully responsive across mobile, tablet and desktop with fast first paint",
    ],
    live: "https://asklegalvision.in/",
    status: "live",
    featured: false,
    note: "Live in production and actively used by the practice for client enquiries.",
    caseStudy: {
      summary:
        "Giving a 20-year legal practice a digital front door that earns trust in the first five seconds.",
      role: "Frontend developer, with PHP/MySQL enquiry backend",
      timeline: "Full build, delivered and live",
      problem: [
        "An established Bombay High Court advocate relied entirely on referrals and had nothing online for prospects who searched first.",
        "Legal enquiries are high-trust decisions — the site had to communicate credentials and specialisation immediately, not after scrolling.",
        "Enquiries arriving by phone alone were being lost with no record of who called about what.",
      ],
      approach: [
        "Led with a decisive hero — practice positioning, credentials and two CTAs (Book a Consultation, Call Now) above the fold.",
        "Broke the practice into five clearly named service areas so visitors self-identify their matter type instantly.",
        "Placed testimonials and Bar Council credentials near the decision points to reinforce trust where it matters.",
        "Built a PHP + MySQL enquiry pipeline so every submission is stored and reviewable through phpMyAdmin.",
        "Kept the build lean — Tailwind utility styling and optimised assets for fast first paint on mobile networks.",
      ],
      results: [
        {
          label: "Practice areas",
          value: "5",
          detail: "each individually presented",
        },
        {
          label: "Enquiry capture",
          value: "Stored",
          detail: "MySQL-backed, never lost",
        },
        {
          label: "CTAs above fold",
          value: "2",
          detail: "consult booking + direct call",
        },
        {
          label: "Experience shown",
          value: "20+ yrs",
          detail: "credentials front and centre",
        },
      ],
      outcome: [
        "The practice now has a shareable, professional link for referrals instead of relying on word of mouth alone.",
        "Every enquiry is recorded, so follow-ups no longer depend on remembering a phone call.",
        "Clear service segmentation means enquiries arrive pre-qualified by matter type.",
      ],
    },
  },

  //   WIP Projects
  {
    slug: "triaksh-tattoo",
    title: "Triaksh Tattoo",
    subtitle: "triakshtattoo2.vercel.app — Modern tattoo studio website for Andheri East, Mumbai",
    overview:
      "A modern, visual-first website for Triaksh Tattoo, a tattoo studio based in Andheri East, Mumbai. The experience is designed around the studio's philosophy that tattooing is an expression of identity, emotion and individuality, with a strong visual presentation, category-based gallery and direct enquiry channels.",
    image: "/Triaksh-Tattoo-Hero.png",
    alt: "Triaksh Tattoo website hero section showcasing the tattoo studio and its visual identity",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router DOM",
      "Responsive UI",
    ],
    features: [
      "Automatic and manual hero slider for showcasing the studio and featured work",
      "Category-based tattoo gallery for easier browsing of different styles and work",
      "Contact form for direct client enquiries",
      "Email redirection for direct client communication",
      "One-tap WhatsApp redirection for quick consultation conversations",
      "Desktop Lighthouse audit: 79 Performance, 96 Accessibility, 77 Best Practices and 100 SEO",
      "Email redirection with pre-filled enquiry messages",
      "Responsive experience designed for mobile, tablet and desktop visitors",
      "Framer Motion interactions and transitions for a polished visual experience",
    ],
    live: "https://triakshtattoo2.vercel.app/",
    status: "building",
    featured: false,
    // note: "Currently in development — preview available while the final website is being refined and prepared for launch.",
    note: "Note:- A working demo is available while the project is being considered for final development and launch.",
    caseStudy: {
      summary:
        "Creating a visually strong digital presence for a tattoo studio where the artwork, identity and enquiry experience take centre stage.",
      role: "Frontend developer",
      timeline: "Currently in development",
      problem: [
        "A tattoo studio needs more than a basic business website — the visual identity and quality of the work need to make an immediate impression.",
        "Potential clients need an easy way to explore tattoo work by category before deciding to enquire.",
        "The enquiry journey needs to be simple on mobile, where visitors can move directly from viewing work to starting a conversation.",
      ],
      approach: [
        "Designed a visual-first hero experience with both automatic and manual controls so featured studio content remains engaging without taking control away from the visitor.",
        "Organised the tattoo portfolio into categories so visitors can explore different styles and find relevant examples more quickly.",
        "Built direct contact paths through a contact form, WhatsApp and email with pre-filled enquiry messaging.",
        "Used React, TypeScript, Tailwind CSS and Framer Motion to create a responsive and polished experience across screen sizes.",
      ],
      results: [
        {
          label: "Project status",
          value: "Building",
          detail: "final website in progress",
        },
        {
          label: "Gallery",
          value: "Category-based",
          detail: "organised tattoo showcase",
        },
        {
          label: "Contact paths",
          value: "3",
          detail: "form, WhatsApp and email",
        },
        {
          label: "Preview",
          value: "Live",
          detail: "Vercel preview available",
        },
      ],
      outcome: [
        "The studio has a working visual foundation that communicates its identity and showcases its tattoo work.",
        "Visitors can move from discovering tattoo styles to contacting the studio through multiple direct enquiry paths.",
        "The project is currently being refined before its final production launch.",
      ],
    },
  },
  {
    slug: "pinpoint-tattooz",
    title: "Pinpoint Tattooz",
    subtitle:
      "pinpoint-tattooz.vercel.app — Private tattoo studio website focused on custom artistry",
    overview:
      "A refined, visual-first website for Pinpoint Tattooz, a private tattoo studio built around custom-designed tattoo experiences. The site communicates the studio's philosophy, showcases its artists and work, and gives potential clients a simple path from discovering the studio to starting a conversation.",
    image: "/Pinpoint-Tattooz-Hero.png",
    alt: "Pinpoint Tattooz website hero section showcasing the private tattoo studio",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router DOM",
      "Responsive UI",
    ],
    features: [
      "Automatic and manual hero slider for showcasing the studio and featured work",
      "Visual tattoo gallery for presenting the studio's work and artistic style",
      "Contact form for direct client enquiries",
      "One-tap WhatsApp redirection for quick consultation conversations",
      "Desktop Lighthouse audit: 85 Performance, 100 Accessibility, 77 Best Practices and 92 SEO",
      "Responsive experience across mobile, tablet and desktop",
      "Framer Motion animations and transitions for a polished browsing experience",
    ],
    live: "https://pinpoint-tattooz.vercel.app/",
    status: "building",
    // note: "Currently in development — preview available while the final website is being refined and prepared for launch.",
    note: "Note:- A working demo is available while the project is being considered for final development and launch.",
    caseStudy: {
      summary:
        "Creating a calm, premium digital presence for a private tattoo studio where custom artistry and personal attention are central to the experience.",
      role: "Frontend developer",
      timeline: "Currently in development",
      problem: [
        "Pinpoint Tattooz needed a digital presence that reflected its private-studio approach rather than feeling like a generic tattoo directory or template website.",
        "Potential clients need to understand the studio's custom-design philosophy and artistic specialisations before deciding to enquire.",
        "The journey from discovering the studio to contacting the artists needs to remain simple and frictionless, especially on mobile.",
      ],
      approach: [
        "Built a visual-first hero experience with automatic and manual controls to create an engaging first impression while keeping navigation in the visitor's hands.",
        "Presented the studio's tattoo work through a focused gallery so visitors can understand the quality and artistic direction before making contact.",
        "Structured the experience around Pinpoint's custom-design philosophy, highlighting the conversation and concept process behind each tattoo.",
        "Added direct enquiry paths through the contact form, WhatsApp and email so interested clients can quickly start a conversation.",
        "Used React, TypeScript, Tailwind CSS and Framer Motion to create a polished and responsive experience across devices.",
      ],
      results: [
        {
          label: "Project status",
          value: "Building",
          detail: "final website in progress",
        },
        {
          label: "Gallery",
          value: "Visual",
          detail: "focused tattoo showcase",
        },
        {
          label: "Contact paths",
          value: "3",
          detail: "form, WhatsApp and email",
        },
        {
          label: "Preview",
          value: "Live",
          detail: "Vercel demo available",
        },
      ],
      outcome: [
        "The studio has a working digital foundation that communicates its private, custom-design approach.",
        "Visitors can explore the studio's work and move directly into an enquiry without unnecessary steps.",
        "The project is currently being refined before the final production website is confirmed and launched.",
      ],
    },
  },
];

export const getProject = (slug: string): Project | undefined => {
  return PROJECTS.find((project) => project.slug === slug);
};
