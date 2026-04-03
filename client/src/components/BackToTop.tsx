import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

/**
 * A subtle "back to top" button that appears after scrolling down 600px.
 * Styled to match the Hearth Curated editorial aesthetic.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed z-40 flex items-center justify-center transition-all duration-300 hover:opacity-80"
      style={{
        bottom: "5rem",
        right: "1.5rem",
        width: "40px",
        height: "40px",
        backgroundColor: "var(--hc-espresso)",
        color: "var(--hc-parchment)",
        border: "none",
        opacity: visible ? 0.7 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ChevronUp size={18} strokeWidth={1.5} />
    </button>
  );
}
