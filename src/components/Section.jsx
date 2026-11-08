import Reveal from "./Reveal.jsx";

/**
 * Editorial two-column section: sticky title on the left, content on the right.
 */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-line scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-20 lg:py-28 grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl lg:text-[2.6rem] leading-[1.05] text-fg lg:sticky lg:top-28">
            {title}
          </h2>
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
