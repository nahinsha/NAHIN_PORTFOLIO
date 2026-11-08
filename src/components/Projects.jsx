import { projects } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { GithubIcon, ExternalLinkIcon } from "./icons.jsx";

function ProjectRow({ project, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="grid gap-4 md:grid-cols-[3rem_1fr] py-10 border-t border-line first:border-t-0 first:pt-0"
    >
      <span className="hidden md:block font-mono text-sm text-subtle pt-3">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <h3 className="font-display text-4xl text-fg leading-tight">{project.name}</h3>
        <p className="mt-1 text-muted">{project.subtitle}</p>

        <p className="mt-5 max-w-2xl text-fg/90 leading-relaxed">{project.description}</p>
        <p className="mt-4 font-mono text-xs leading-relaxed text-accent">
          {project.stack.join(" / ")}
        </p>

        <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm text-fg/85">
              <span className="text-accent" aria-hidden="true">–</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
            >
              Live Demo
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-fg hover:border-fg/50 hover:bg-surface transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
