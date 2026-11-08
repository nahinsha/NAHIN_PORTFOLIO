import { GMAIL_COMPOSE_URL, MAILTO_URL } from "../data/content.js";

/**
 * A link that reliably opens an email compose window addressed to
 * nahinshahariar27@gmail.com.
 *
 * Behaviour:
 *  - href points to a real `mailto:` link, so the address is always visible,
 *    copyable, and works even with JavaScript disabled or on native mail apps.
 *  - On click (when JS is available), it opens Gmail's web compose view in a
 *    new tab with the recipient pre-filled — the most reliable path on
 *    desktop browsers. If the popup is blocked, it falls back to the
 *    mailto: link in the current tab.
 */
export default function EmailLink({ children, className = "", ...rest }) {
  const handleClick = (event) => {
    event.preventDefault();
    const gmailTab = window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    if (!gmailTab) {
      window.location.href = MAILTO_URL;
    }
  };

  return (
    <a href={MAILTO_URL} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
