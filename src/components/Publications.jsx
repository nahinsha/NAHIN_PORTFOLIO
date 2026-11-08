import { publications } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { ExternalLinkIcon } from "./icons.jsx";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <div>
        {publications.map((pub, i) => (
          <Reveal
            key={pub.title}
            as="article"
            delay={i * 60}
            className="py-9 border-t border-line first:border-t-0 first:pt-0"
          >
            <h3 className="font-display text-2xl sm:text-3xl leading-snug text-fg max-w-3xl">
              {pub.title}
            </h3>
            {pub.authors && <p className="mt-3 text-sm text-fg/90">{pub.authors}</p>}
            <p className={`${pub.authors ? "mt-1" : "mt-3"} text-sm text-accent`}>{pub.venue}</p>
            <p className="mt-1 font-mono text-xs text-muted">{pub.detail}</p>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">{pub.description}</p>

            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
            >
              Read Paper
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
