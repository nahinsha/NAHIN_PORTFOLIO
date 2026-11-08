import useScrollReveal from "../hooks/useScrollReveal.js";

/**
 * Wraps children in a div that fades/slides into view on scroll.
 * `delay` accepts a Tailwind-safe inline style delay in ms.
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useScrollReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
