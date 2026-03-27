// HEARTH CURATED — About Page (Rewritten)
// Honest, compelling copy — no fictional artisan sourcing
// Focus: real curation process, editorial eye, intentional selection
// Design: Editorial storytelling — Kinfolk/Aesop aesthetic (preserved)
// Sections: Hero, Why We Exist (split), Three Principles (espresso bg),
//           How We Curate (split), Promise (centered), CTA band

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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
      <SEOHead
        title="Our Story — Hearth Curated"
        description="Hearth Curated is a curated home goods store based in Singapore. We search globally to find beautiful, functional objects for the intentional home — so you don't have to."
        canonicalPath="/about"
        ogImage={HERO_IMG}
        ogImageAlt="Hearth Curated — objects arranged with intention"
      />
      <Nav />

      <main className="flex-1">
        {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "70vh", minHeight: "480px" }}
        >
          <img
            src={HERO_IMG}
            alt="Hearth Curated — objects arranged with intention"
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
                  We Find the Objects
                  <br />
                  So You Don't Have To
                </h1>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY WE EXIST — Split Layout ──────────────── */}
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
                    alt="Curated objects on a kitchen table — ceramic mug, wooden spoon, linen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>

              {/* Text — right, 7 cols */}
              <div className="md:col-span-7 md:pl-4">
                <FadeUp delay={0.1}>
                  <p className="hc-eyebrow mb-4">The Mission</p>
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
                    Beautiful Home Objects
                    <br />
                    Shouldn't Be Hard to Find
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
                      There are millions of home products available online. The
                      problem isn't scarcity — it's noise. Endless scrolling
                      through identical listings, misleading photos, and products
                      that look nothing like their pictures when they arrive.
                    </p>
                    <p>
                      We started Hearth Curated because we were tired of the
                      search. Tired of ordering five versions of the same candle
                      holder to find one worth keeping. Tired of beautiful
                      product photos attached to disappointing reality.
                    </p>
                    <p>
                      So we decided to do the searching for you. We spend our
                      time browsing, comparing, reading reviews, ordering
                      samples, and testing products — so that when something
                      appears on our shelves, it has already survived a process
                      most stores never bother with.
                    </p>
                    <p>
                      The name came naturally. A hearth is the oldest gathering
                      point in any home — the place where warmth begins. And
                      "curated" is not a marketing word for us. It is the work
                      itself.
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
                Our Filter
              </p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                Three Questions Every
                <br />
                Product Must Pass
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-5xl mx-auto">
              {[
                {
                  num: "01",
                  title: "Is It Genuinely Useful?",
                  body: "We don't sell decoration for its own sake. Every product must earn its place through daily use. If it sits in a drawer after the first week, it doesn't belong here. We look for objects that solve real problems in real kitchens, real living rooms, real bathrooms.",
                },
                {
                  num: "02",
                  title: "Does It Look as Good in Person?",
                  body: "This is where most online stores fail. A product can look stunning in a styled photo and disappointing on your shelf. We evaluate materials, proportions, and finish quality — not just the listing image. If the reality doesn't match the promise, we don't carry it.",
                },
                {
                  num: "03",
                  title: "Would We Keep It Ourselves?",
                  body: "The simplest test and the hardest to pass. Before anything goes into our collection, we ask: would I actually use this in my own home? Not as a novelty, not as a gift — as a daily object. If the answer isn't an immediate yes, it doesn't make the cut.",
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

        {/* ── SECTION 4: HOW WE CURATE — Split Layout (reversed) ───── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
              {/* Text — left, 7 cols */}
              <div className="md:col-span-7 order-2 md:order-1 md:pr-4">
                <FadeUp delay={0.1}>
                  <p className="hc-eyebrow mb-4">How We Work</p>
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
                      carry thousands of products, we carry fewer than sixty.
                      This is not a limitation — it is the entire point.
                    </p>
                    <p>
                      We search globally for products that meet our standards.
                      For every item you see on our shelves, dozens were
                      considered and rejected — wrong proportions, cheap
                      materials, poor reviews, or simply not interesting enough
                      to deserve a place in someone's home.
                    </p>
                    <p>
                      We read hundreds of customer reviews before adding any
                      product. We study the materials, the dimensions, the
                      weight. We look at how the product photographs from every
                      angle, not just the hero shot. And we pay attention to the
                      complaints — because what people dislike tells you more
                      than what they praise.
                    </p>
                    <p>
                      The result is a collection where everything belongs. No
                      filler, no "also-rans," no products added just to pad out
                      a category. Every object here has earned its place.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Image — right, 5 cols */}
              <FadeUp className="md:col-span-5 order-1 md:order-2">
                <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={HANDS_IMG}
                    alt="Carefully selected home objects arranged on a surface"
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
                What You Can Expect
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
                  We promise to only carry products we genuinely believe in. We
                  promise to describe every object honestly — what it does well
                  and where it falls short. We promise that our photos represent
                  reality, not a fantasy.
                </p>
                <p>
                  We promise that "sold out" sometimes means "we chose not to
                  restock" because we found something better. And we promise that
                  if something isn't right with your order, we will make it
                  right.
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
