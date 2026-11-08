import { leadership } from "../data/content.js";
import Section from "./Section.jsx";
import Entry from "./Entry.jsx";

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership & Extracurricular Activities">
      {leadership.map((item) => (
        <Entry key={item.role} period={item.period} title={item.role} subtitle={item.org}>
          {item.description && (
            <p className="mt-4 max-w-2xl text-sm text-fg/85 leading-relaxed">{item.description}</p>
          )}
        </Entry>
      ))}
    </Section>
  );
}
