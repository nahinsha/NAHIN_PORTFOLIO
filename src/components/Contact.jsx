import { profile } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import Reveal from "./Reveal.jsx";
import { ArrowRightIcon } from "./icons.jsx";

const rowClass =
  "group flex items-center justify-between gap-6 py-6 border-t border-line hover:bg-surface/60 transition-colors";

function Row({ label, value, children }) {
  return (
    <>
      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-10 min-w-0">
        <span className="font-mono text-sm text-muted sm:w-20 shrink-0">{label}</span>
        <span className="font-display text-xl sm:text-3xl text-fg break-all group-hover:text-accent transition-colors">
          {value}
        </span>
      </span>
      {children}
    </>
  );
}

const arrow = (
  <ArrowRightIcon className="w-5 h-5 shrink-0 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
);

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-fg max-w-3xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            I&apos;m open to software development opportunities, internships, collaborations, and
            projects where I can contribute, learn, and grow.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14 border-b border-line">
          <EmailLink className={rowClass}>
            <Row label="Email" value={profile.email}>{arrow}</Row>
          </EmailLink>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={rowClass}>
            <Row label="GitHub" value="github.com/nahinsha">{arrow}</Row>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={rowClass}>
            <Row label="LinkedIn" value="linkedin.com/in/md-shahariar-nahin-a5b147301">{arrow}</Row>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
