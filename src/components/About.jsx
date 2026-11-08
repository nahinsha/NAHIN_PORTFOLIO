import { aboutParagraphs, aboutFacts } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <Section id="about" title="About Me">
      <Reveal delay={60}>
        <p className="font-display text-2xl sm:text-3xl leading-snug text-fg max-w-3xl">{lead}</p>
        <div className="mt-6 space-y-4 max-w-2xl">
          {rest.map((p) => (
            <p key={p} className="text-muted leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} as="dl" className="mt-12 pt-8 border-t border-line grid gap-6 sm:grid-cols-3">
        {aboutFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-sm text-muted">{fact.label}</dt>
            <dd className="mt-2 text-fg leading-snug">{fact.value}</dd>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
