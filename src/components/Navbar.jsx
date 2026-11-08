import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import { MenuIcon, CloseIcon } from "./icons.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "bg-canvas/85 backdrop-blur-md border-line" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-3xl leading-none text-fg"
          onClick={() => setOpen(false)}
        >
          Nahin<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted hover:text-fg transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="lg:hidden text-fg p-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-canvas transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 font-display text-3xl text-fg border-b border-line hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
