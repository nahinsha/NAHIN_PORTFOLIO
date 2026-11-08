import { education } from "../data/content.js";
import Section from "./Section.jsx";
import Entry from "./Entry.jsx";

export default function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((item, i) => (
        <Entry
          key={item.degree}
          period={item.period}
          title={item.degree}
          subtitle={item.institution}
          delay={i * 60}
        />
      ))}
    </Section>
  );
}
