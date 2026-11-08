import { profile, PROFILE_IMAGE_URL, RESUME_URL } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import { GithubIcon, LinkedinIcon, ArrowRightIcon } from "./icons.jsx";

const codeLines = [
  { n: 1, tokens: [["from django.db import models", "text"]] },
  { n: 2, tokens: [] },
  { n: 3, tokens: [["class ", "kw"], ["Developer", "cls"], ["(models.Model):", "text"]] },
  { n: 4, tokens: [["    name", "prop"], [" = models.CharField(max_length=100)", "text"]] },
  { n: 5, tokens: [["    stack", "prop"], [' = ["Python", "Django", "React"]', "str"]] },
  { n: 6, tokens: [["    focus", "prop"], [' = "Backend & Full-Stack"', "str"]] },
  { n: 7, tokens: [] },
  { n: 8, tokens: [["    def ", "kw"], ["is_available", "cls"], ["(self):", "text"]] },
  { n: 9, tokens: [["        return ", "kw"], ["True", "kw"]] },
];

const tokenClass = {
  kw: "text-accent",
  cls: "text-fg",
  prop: "text-fg/80",
  str: "text-muted",
  text: "text-muted",
};

const primaryBtn =
  "inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity";
const secondaryBtn =
  "inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-fg hover:border-fg/50 hover:bg-surface transition-colors";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
        <div className="min-w-0 opacity-0 animate-fadeUp">
          <img
            src={PROFILE_IMAGE_URL}
            alt={profile.name}
            width="64"
            height="64"
            className="w-16 h-16 rounded-full object-cover ring-1 ring-line mb-6"
          />
          <p className="text-muted">Hello, I&apos;m</p>
          <h1 className="mt-2 font-display text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-fg">
            {profile.name}
          </h1>
          <h2 className="mt-6 text-lg sm:text-xl text-fg/90">{profile.title}</h2>
          <p className="mt-5 max-w-xl text-muted leading-relaxed">
            Computer Science &amp; Engineering graduate focused on building practical web
            applications using Python, Django, React, JavaScript, SQL, and REST APIs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className={primaryBtn}>
              View Projects
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <EmailLink className={secondaryBtn}>Email Me</EmailLink>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
              View Resume
            </a>
          </div>

          <div className="mt-9 flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Subtle code-inspired visual */}
        <div className="min-w-0 opacity-0 animate-fadeUp [animation-delay:180ms]" aria-hidden="true">
          <div className="rounded-lg border border-line bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-fg/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-fg/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-fg/20" />
              <span className="ml-2 font-mono text-xs text-muted">developer.py</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              {codeLines.map((line) => (
                <div key={line.n} className="flex">
                  <span className="w-6 shrink-0 select-none text-subtle/60">{line.n}</span>
                  <span className="whitespace-pre">
                    {line.tokens.length === 0
                      ? "\u00A0"
                      : line.tokens.map(([text, kind], i) => (
                          <span key={i} className={tokenClass[kind]}>
                            {text}
                          </span>
                        ))}
                  </span>
                </div>
              ))}
              <div className="flex">
                <span className="w-6 shrink-0" />
                <span className="inline-block w-2 h-4 bg-accent animate-blink align-middle" />
              </div>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
