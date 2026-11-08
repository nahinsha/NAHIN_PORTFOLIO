import { experience } from "../data/content.js";
import Section from "./Section.jsx";
import Entry from "./Entry.jsx";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((item, i) => (
        <Entry
          key={item.role + item.period}
          period={item.period}
          title={item.role}
          subtitle={`${item.org} · ${item.type}`}
          delay={i * 60}
        >
          <ul className="mt-5 space-y-2 max-w-2xl">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-fg/85 leading-relaxed">
                <span className="text-accent" aria-hidden="true">–</span>
                {point}
              </li>
            ))}
          </ul>
        </Entry>
      ))}
    </Section>
  );
}
