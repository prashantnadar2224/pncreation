import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";

import { PROJECTS } from "@/data/projects";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";

export function Projects() {
    return (
        <section id="projects" className="container-page mt-24 sm:mt-28">
            <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-bold tracking-[0.28em] text-gold uppercase">
                        Projects
                    </p>

                    <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                        Selected{" "}
                        <span className="text-gold-gradient">work.</span>
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Real websites and products built with performance, usability,
                        responsive design and business results in mind.
                    </p>
                </div>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2" stagger={0.1}>
                {PROJECTS.map((project) => (
                    <RevealItem
                        key={project.slug}
                        className={project.featured ? "lg:col-span-2" : ""}
                    >
                        <motion.article
                            whileHover={{ y: -6 }}
                            transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 22,
                            }}
                            aria-labelledby={`project-${project.slug}-title`}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-colors hover:border-primary/45"
                        >
                            {/* Project preview */}
                            <div className="relative border-b border-border bg-surface p-3 sm:p-4">
                                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
                                    {/* Browser-style header */}
                                    <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2.5">
                                        <span
                                            aria-hidden="true"
                                            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
                                        />

                                        <span className="ml-2 truncate text-[11px] font-medium text-muted-foreground">
                                            {project.live
                                                ? project.live
                                                    .replace(/^https?:\/\//, "")
                                                    .replace(/\/$/, "")
                                                : "project preview"}
                                        </span>
                                    </div>

                                    {/* Screenshot */}
                                    <div
                                        className={`w-full overflow-hidden ${project.featured
                                            ? "aspect-[16/8] lg:aspect-[21/9]"
                                            : "aspect-video"
                                            }`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            loading="lazy"
                                            decoding="async"
                                            className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Featured badge */}
                                {project.featured ? (
                                    <span className="absolute right-1 top-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[11px] leading-none font-semibold text-primary-foreground shadow-glow ring-1 ring-background/60 sm:right-2 sm:top-2 sm:px-3 sm:py-1.5 sm:text-xs">
                                        <Star
                                            className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                                            aria-hidden="true"
                                        />
                                        Featured project
                                    </span>
                                ) : null}
                            </div>

                            {/* Project information */}
                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <h3
                                    id={`project-${project.slug}-title`}
                                    className="text-xl font-semibold text-balance sm:text-2xl"
                                >
                                    {project.title}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-primary">
                                    {project.subtitle}
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                    {project.overview}
                                </p>

                                {/* Key highlights */}
                                <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-4 sm:p-5">
                                    <h4 className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
                                        Key highlights
                                    </h4>

                                    <ul
                                        className="mt-3 space-y-2"
                                        aria-label={`${project.title} key highlights`}
                                    >
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-2.5 text-sm text-muted-foreground"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Project note */}
                                {project.note ? (
                                    <p className="mt-5 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                                        {project.note}
                                    </p>
                                ) : null}

                                {/* Tech stack */}
                                <div className="mt-6 border-t border-border pt-5">
                                    <h4 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                        Tech stack
                                    </h4>

                                    <ul
                                        className="mt-3 flex flex-wrap gap-2"
                                        aria-label={`${project.title} tech stack`}
                                    >
                                        {project.stack.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Actions */}
                                <div className="mt-7 flex flex-wrap gap-3 pt-1">
                                    {project.live ? (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            title={`Open the live ${project.title} website`}
                                            aria-label={`Open the live ${project.title} website in a new tab`}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                                        >
                                            {/* Live Website */}
                                            {project.status === "live" ? "Live Website" : "View Demo"}
                                            <ArrowUpRight
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </motion.a>
                                    ) : null}

                                    {project.github ? (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            title={`View the ${project.title} source on GitHub`}
                                            aria-label={`View the ${project.title} source code on GitHub`}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                                        >
                                            <Github
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            GitHub
                                        </motion.a>
                                    ) : null}
                                </div>
                            </div>
                        </motion.article>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}