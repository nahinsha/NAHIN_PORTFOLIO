import { skillGroups } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <dl>
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 50}
            className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-8 py-5 border-t border-line first:border-t-0 first:pt-0"
          >
            <dt className="font-mono text-sm text-muted pt-1.5">{group.title}</dt>
            <dd className="flex flex-wrap gap-x-6 gap-y-1 font-display text-2xl text-fg">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
