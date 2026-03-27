// Shared layout for legal/policy pages — consistent with Hearth Curated editorial style
// Used by: PrivacyPolicy, TermsOfService, RefundPolicy

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/* ── Scroll-triggered fade-up ─────────────────────────────────── */
function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Section component for policy sections ────────────────────── */
export function PolicySection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="mb-10">
        <h2
          className="text-lg md:text-xl mb-4 leading-snug"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            color: "var(--hc-espresso)",
            fontWeight: 400,
          }}
        >
          {title}
        </h2>
        <div
          className="space-y-4"
          style={{
            fontFamily: "'Karla', sans-serif",
            color: "var(--hc-sienna)",
            fontSize: "0.9375rem",
            lineHeight: 1.8,
          }}
        >
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

/* ── Main layout ──────────────────────────────────────────────── */
export default function LegalPageLayout({
  title,
  subtitle,
  seoTitle,
  seoDescription,
  canonicalPath,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--hc-parchment)" }}
    >
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
      />
      <Nav />

      <main className="flex-1">
        {/* ── HERO BANNER ──────────────────────────────────────── */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container text-center">
            <FadeUp>
              <p
                className="hc-eyebrow mb-4"
                style={{ color: "var(--hc-stone)" }}
              >
                Legal
              </p>
              <h1
                className="text-3xl md:text-4xl leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                {title}
              </h1>
              <p
                className="mt-4 text-sm max-w-lg mx-auto"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sand)",
                  lineHeight: 1.7,
                }}
              >
                {subtitle}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="max-w-2xl mx-auto">
              {/* Last updated */}
              <FadeUp>
                <p
                  className="text-xs tracking-widest uppercase mb-10"
                  style={{
                    color: "var(--hc-stone)",
                    fontFamily: "'Karla', sans-serif",
                  }}
                >
                  Last updated: {lastUpdated}
                </p>
              </FadeUp>

              {children}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
