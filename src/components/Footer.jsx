import { profile } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <EmailLink aria-label="Email me" className="text-muted hover:text-accent transition-colors">
            <MailIcon className="w-5 h-5" />
          </EmailLink>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-5">
          <p className="text-xs text-muted">© 2026 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
