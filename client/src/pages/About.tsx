// HEARTH CURATED — About Page
// Design: Editorial storytelling — Kinfolk/Aesop aesthetic
// Sections: Hero, Origin Story (split), Three Principles (espresso bg),
//           Curation Process (split), Promise (centered), CTA band
// Typography: Libre Baskerville headings, Karla body
// Layout: Asymmetric splits, generous whitespace, no rounded corners

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/about-hero-4gESyxisMgDHeNSkjTkoYU.webp";
const ORIGIN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/about-origin-UU4bPSvs8Ss29MxGm8hi3o.webp";
const HANDS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/about-hands-9xGFaW7GdoAJ58ktC9zTvi.webp";

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

export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--hc-parchment)" }}
    >
      <Nav />

      <main className="flex-1">
        {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "70vh", minHeight: "480px" }}
        >
          <img
            src={HERO_IMG}
            alt="Hearth Curated workshop — objects arranged with intention"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(28,16,8,0.6) 0%, rgba(28,16,8,0.2) 40%, rgba(28,16,8,0.05) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
            <div className="container">
              <FadeUp>
                <p
                  className="hc-eyebrow mb-4"
                  style={{ color: "rgba(242,237,228,0.75)" }}
                >
                  Our Story
                </p>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    color: "var(--hc-parchment)",
                    fontWeight: 400,
                  }}
                >
                  We Believe the Home
                  <br />
                  Is a Practice, Not a Place
                </h1>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ORIGIN STORY — Split Layout ───────────────── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
              {/* Image — left, 5 cols */}
              <FadeUp className="md:col-span-5">
                <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img
                    src={ORIGIN_IMG}
                    alt="Curated objects on a kitchen table — ceramic mug, wooden spoon, coffee beans"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>

              {/* Text — right, 7 cols */}
              <div className="md:col-span-7 md:pl-4">
                <FadeUp delay={0.1}>
                  <p className="hc-eyebrow mb-4">The Beginning</p>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      color: "var(--hc-espresso)",
                      fontWeight: 400,
                    }}
                  >
                    It Started with
                    <br />a Kitchen Table
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div
                    className="space-y-5 max-w-lg"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      color: "var(--hc-sienna)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.8,
                    }}
                  >
                    <p>
                      Hearth Curated began with a question that most people
                      never think to ask: why do the objects in our homes look
                      the way they do?
                    </p>
                    <p>
                      We noticed that the things people reach for every
                      morning — the mug, the cutting board, the spoon — were
                      almost always chosen by default. Grabbed in haste from a
                      shelf of identical options. Functional, perhaps. But never
                      considered.
                    </p>
                    <p>
                      We started sourcing differently. Not from catalogues, but
                      from workshops. Not by trend, but by touch. Every object
                      in our collection has been held, tested, and questioned
                      before it earns a place on our shelves.
                    </p>
                    <p>
                      The name came naturally. A hearth is the oldest gathering
                      point in any home — the place where warmth begins. And
                      "curated" is not a marketing word for us. It is a
                      discipline.
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THREE PRINCIPLES — Espresso Background ────── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container">
            <FadeUp className="text-center mb-16 md:mb-20">
              <p className="hc-eyebrow mb-4" style={{ color: "var(--hc-stone)" }}>
                Our Principles
              </p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                Three Questions We Ask
                <br />
                of Every Object
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-5xl mx-auto">
              {[
                {
                  num: "01",
                  title: "Does It Solve a Genuine Problem?",
                  body: "We do not sell decoration for its own sake. Every product must earn its place through daily use. A candle must burn cleanly for forty hours. A knife must hold its edge. A vase must hold water without tipping. If it does not solve a real problem in a real home, it does not belong here.",
                },
                {
                  num: "02",
                  title: "Does It Photograph Beautifully?",
                  body: "This is not vanity — it is a proxy for care. Objects that photograph well are objects where someone has thought about proportion, finish, and light. They are objects where a maker has spent an extra hour on a detail that most people will never consciously notice, but will always feel.",
                },
                {
                  num: "03",
                  title: "Does It Feel Like a Discovery?",
                  body: 'We want every product to provoke the same reaction: "Where did you find this?" Not because it is rare or expensive, but because it is unexpected. The kind of object you would never find in a department store — but once you own it, you cannot imagine your kitchen without it.',
                },
              ].map((p, i) => (
                <FadeUp key={p.num} delay={i * 0.12}>
                  <div
                    className="text-center md:text-left"
                    style={{ borderTop: "1px solid rgba(196,185,170,0.2)" }}
                  >
                    <span
                      className="block mt-6 mb-4 text-xs tracking-widest"
                      style={{
                        fontFamily: "'Karla', sans-serif",
                        color: "var(--hc-stone)",
                        fontWeight: 500,
                      }}
                    >
                      {p.num}
                    </span>
                    <h3
                      className="text-lg md:text-xl mb-5 leading-snug"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        color: "var(--hc-parchment)",
                        fontWeight: 400,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Karla', sans-serif",
                        color: "var(--hc-sand)",
                        lineHeight: 1.8,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CURATION PROCESS — Split Layout (reversed) ── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
              {/* Text — left, 7 cols */}
              <div className="md:col-span-7 order-2 md:order-1 md:pr-4">
                <FadeUp delay={0.1}>
                  <p className="hc-eyebrow mb-4">How We Source</p>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      color: "var(--hc-espresso)",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    "Less, but Better"
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div
                    className="space-y-5 max-w-lg"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      color: "var(--hc-sienna)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.8,
                    }}
                  >
                    <p>
                      Our catalogue is deliberately small. Where other stores
                      carry thousands of products, we carry fewer than fifty.
                      This is not a limitation — it is the entire point.
                    </p>
                    <p>
                      Every product begins as a candidate. We evaluate
                      materials, test durability, and live with each object for
                      weeks before making a decision. Most candidates are
                      rejected. The ones that remain have survived a process
                      designed to be difficult.
                    </p>
                    <p>
                      We source from makers and suppliers across Asia and
                      Europe — small workshops where craft still matters, where
                      a single artisan might spend a full day on a single piece.
                      We pay fairly, we order thoughtfully, and we never chase
                      volume.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Image — right, 5 cols */}
              <FadeUp className="md:col-span-5 order-1 md:order-2">
                <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={HANDS_IMG}
                    alt="Hands carefully examining a handmade ceramic bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: PROMISE — Centered Text ───────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{
            backgroundColor: "var(--hc-warm-white)",
            borderTop: "1px solid var(--hc-stone)",
            borderBottom: "1px solid var(--hc-stone)",
          }}
        >
          <div className="container">
            <FadeUp className="max-w-2xl mx-auto text-center">
              <p className="hc-eyebrow mb-6">Our Promise</p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-espresso)",
                  fontWeight: 400,
                }}
              >
                What We Stand For
              </h2>
              <div
                className="space-y-5"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sienna)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  We promise to never carry a product we would not use in our
                  own homes. We promise to describe every object honestly — its
                  strengths and its limitations. We promise that "sold out"
                  sometimes means "we chose not to restock" because we found
                  something better.
                </p>
                <p>
                  We are not building the largest home goods store. We are
                  building the most considered one.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── SECTION 6: CTA BAND ──────────────────────────────────── */}
        <section
          className="py-20 md:py-24"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container text-center">
            <FadeUp>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                Begin with One Object
              </h2>
              <p
                className="text-sm md:text-base mb-10 max-w-md mx-auto"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sand)",
                  lineHeight: 1.7,
                }}
              >
                The intentional home starts with a single, considered choice.
              </p>
              <Link
                href="/collections/gather"
                className="inline-block px-8 py-3.5 text-xs tracking-widest uppercase transition-colors duration-250"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  border: "1px solid rgba(196,185,170,0.4)",
                  color: "var(--hc-parchment)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--hc-parchment)";
                  e.currentTarget.style.color = "var(--hc-espresso)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--hc-parchment)";
                }}
              >
                Explore Collections
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
