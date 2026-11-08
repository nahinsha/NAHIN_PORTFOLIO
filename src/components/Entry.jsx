import Reveal from "./Reveal.jsx";

/** A single timeline-style row: period on the left, details on the right. */
export default function Entry({ period, title, subtitle, delay = 0, children }) {
  return (
    <Reveal
      delay={delay}
      className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-8 py-8 border-t border-line first:border-t-0 first:pt-0"
    >
      <p className="font-mono text-sm text-muted pt-1.5">{period}</p>
      <div>
        <h3 className="font-display text-2xl sm:text-3xl text-fg leading-snug">{title}</h3>
        {subtitle && <p className="mt-1 text-muted">{subtitle}</p>}
        {children}
      </div>
    </Reveal>
  );
}
