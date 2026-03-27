// HEARTH CURATED — Shipping & Returns Page
// Design: Clean editorial policy page — Aesop/Kinfolk aesthetic
// Sections: Hero banner, Shipping policy, Returns policy, FAQ accordion, CTA band
// Typography: Libre Baskerville headings, Karla body
// Layout: Centered content column with generous whitespace, no rounded corners

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Package, RotateCcw, Clock, Truck, ShieldCheck, Mail } from "lucide-react";
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

/* ── FAQ Accordion Item ───────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div style={{ borderBottom: "1px solid var(--hc-stone)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
        style={{ fontFamily: "'Karla', sans-serif" }}
      >
        <span
          className="text-sm md:text-base pr-8"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            color: "var(--hc-espresso)",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            color: "var(--hc-sienna)",
            fontSize: "1.25rem",
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s ease",
        }}
      >
        <div
          ref={contentRef}
          className="pb-6"
          style={{
            fontFamily: "'Karla', sans-serif",
            color: "var(--hc-sienna)",
            fontSize: "0.9375rem",
            lineHeight: 1.8,
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ── Policy highlight card ────────────────────────────────────── */
function PolicyCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: typeof Package;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="text-center px-4">
        <div
          className="w-12 h-12 mx-auto mb-5 flex items-center justify-center"
          style={{ border: "1px solid var(--hc-stone)" }}
        >
          <Icon size={20} strokeWidth={1.2} style={{ color: "var(--hc-sienna)" }} />
        </div>
        <h3
          className="text-sm mb-2"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            color: "var(--hc-espresso)",
            fontWeight: 400,
          }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{
            fontFamily: "'Karla', sans-serif",
            color: "var(--hc-sienna)",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </FadeUp>
  );
}

/* ── SHIPPING & RETURNS DATA ──────────────────────────────────── */
const FAQS = [
  {
    question: "How long does standard shipping take?",
    answer:
      "Standard shipping within Singapore takes 3–5 business days. Regional orders (Malaysia, Indonesia, Thailand, Philippines) typically arrive within 7–12 business days. International orders to all other destinations are estimated at 10–18 business days. Please note that customs processing may add 1–3 additional days for international shipments.",
  },
  {
    question: "Do you offer express shipping?",
    answer:
      "Yes. Express shipping is available for Singapore orders at a flat rate of $8 SGD, with delivery within 1–2 business days. Express shipping for regional destinations is available at checkout for $15 SGD, with delivery within 3–5 business days. Express international shipping is not currently available.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You will receive a shipping confirmation email with a tracking number within 24 hours of dispatch. You can track your order through the carrier's website or by visiting our Order Tracking page. If you have not received a tracking number within 48 hours of your order confirmation, please contact us at hello@hearthcurated.com.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for unused, undamaged items in their original packaging. To initiate a return, email hello@hearthcurated.com with your order number and reason for return. We will provide a return shipping label for Singapore orders. For international returns, the customer is responsible for return shipping costs.",
  },
  {
    question: "Can I exchange an item for a different variant?",
    answer:
      "Yes. If you would like a different size or colour of the same product, email us within 14 days of delivery and we will arrange an exchange at no additional cost (Singapore only). For international exchanges, a shipping difference may apply. Exchanges are subject to availability.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "We take great care in packaging every order, but if your item arrives damaged, please email hello@hearthcurated.com within 48 hours of delivery with photographs of the damage and your order number. We will arrange a full replacement or refund at no cost to you, including return shipping.",
  },
  {
    question: "Are there items that cannot be returned?",
    answer:
      "For hygiene and safety reasons, we cannot accept returns on candles that have been lit, food and drink items (NOURISH collection), or any item that has been used, washed, or altered. Gift cards are also non-refundable. If you are unsure whether your item qualifies for return, please contact us before shipping it back.",
  },
  {
    question: "How long does a refund take to process?",
    answer:
      "Once we receive and inspect your returned item, refunds are processed within 3–5 business days. The refund will be credited to your original payment method. Please allow an additional 5–10 business days for the refund to appear on your statement, depending on your bank or payment provider.",
  },
];

export default function ShippingReturns() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--hc-parchment)" }}
    >
      <SEOHead
        title="Shipping & Returns — Hearth Curated"
        description="Free shipping on orders over $75. Easy 14-day returns on all unused items. Learn about our shipping rates, delivery times, and return policy."
        canonicalPath="/shipping-returns"
      />
      <Nav />

      <main className="flex-1">
        {/* ── HERO BANNER ──────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container text-center">
            <FadeUp>
              <p
                className="hc-eyebrow mb-4"
                style={{ color: "var(--hc-stone)" }}
              >
                Customer Care
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                Shipping & Returns
              </h1>
              <p
                className="mt-5 text-sm md:text-base max-w-lg mx-auto"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sand)",
                  lineHeight: 1.7,
                }}
              >
                We believe the care we put into delivering your order should
                match the care we put into selecting every object.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── POLICY HIGHLIGHTS — 4 cards ──────────────────────────── */}
        <section
          className="py-16 md:py-20"
          style={{
            backgroundColor: "var(--hc-warm-white)",
            borderBottom: "1px solid var(--hc-stone)",
          }}
        >
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto">
              <PolicyCard
                icon={Truck}
                title="Free Over $75"
                description="Complimentary standard shipping on all orders above $75 SGD within Singapore."
                delay={0}
              />
              <PolicyCard
                icon={Package}
                title="Careful Packaging"
                description="Every item is individually wrapped and cushioned to arrive exactly as intended."
                delay={0.08}
              />
              <PolicyCard
                icon={RotateCcw}
                title="14-Day Returns"
                description="Unused items in original packaging may be returned within 14 days of delivery."
                delay={0.16}
              />
              <PolicyCard
                icon={ShieldCheck}
                title="Damage Guarantee"
                description="If your item arrives damaged, we will replace or refund it — no questions asked."
                delay={0.24}
              />
            </div>
          </div>
        </section>

        {/* ── SHIPPING POLICY ──────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <FadeUp>
                <p className="hc-eyebrow mb-4">Delivery</p>
                <h2
                  className="text-2xl md:text-3xl mb-8 leading-tight"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    color: "var(--hc-espresso)",
                    fontWeight: 400,
                  }}
                >
                  Shipping Policy
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div
                  className="space-y-6"
                  style={{
                    fontFamily: "'Karla', sans-serif",
                    color: "var(--hc-sienna)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                  }}
                >
                  <p>
                    We ship from Singapore to destinations worldwide. Every order
                    is carefully packed within 1–2 business days of purchase. You
                    will receive a confirmation email with tracking details once
                    your order has been dispatched.
                  </p>

                  {/* Shipping rates table */}
                  <div
                    className="overflow-x-auto"
                    style={{ border: "1px solid var(--hc-stone)" }}
                  >
                    <table className="w-full text-left text-sm" style={{ minWidth: "480px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "var(--hc-espresso)" }}>
                          <th
                            className="px-5 py-3.5"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              fontWeight: 500,
                              fontSize: "0.6875rem",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--hc-parchment)",
                            }}
                          >
                            Destination
                          </th>
                          <th
                            className="px-5 py-3.5"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              fontWeight: 500,
                              fontSize: "0.6875rem",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--hc-parchment)",
                            }}
                          >
                            Standard
                          </th>
                          <th
                            className="px-5 py-3.5"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              fontWeight: 500,
                              fontSize: "0.6875rem",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--hc-parchment)",
                            }}
                          >
                            Estimated Delivery
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            dest: "Singapore",
                            rate: "Free over $75 / $5 flat",
                            time: "3–5 business days",
                          },
                          {
                            dest: "Malaysia, Indonesia, Thailand, Philippines",
                            rate: "$12 SGD",
                            time: "7–12 business days",
                          },
                          {
                            dest: "Rest of Asia-Pacific",
                            rate: "$18 SGD",
                            time: "10–15 business days",
                          },
                          {
                            dest: "International",
                            rate: "$25 SGD",
                            time: "10–18 business days",
                          },
                        ].map((row, i) => (
                          <tr
                            key={row.dest}
                            style={{
                              borderTop: "1px solid var(--hc-stone)",
                              backgroundColor:
                                i % 2 === 0
                                  ? "var(--hc-parchment)"
                                  : "var(--hc-warm-white)",
                            }}
                          >
                            <td
                              className="px-5 py-4"
                              style={{
                                fontFamily: "'Karla', sans-serif",
                                color: "var(--hc-espresso)",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                              }}
                            >
                              {row.dest}
                            </td>
                            <td
                              className="px-5 py-4"
                              style={{
                                fontFamily: "'Karla', sans-serif",
                                color: "var(--hc-sienna)",
                                fontSize: "0.875rem",
                              }}
                            >
                              {row.rate}
                            </td>
                            <td
                              className="px-5 py-4"
                              style={{
                                fontFamily: "'Karla', sans-serif",
                                color: "var(--hc-sienna)",
                                fontSize: "0.875rem",
                              }}
                            >
                              {row.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                      Express shipping
                    </strong>{" "}
                    is available for Singapore ($8 SGD, 1–2 business days) and
                    regional destinations ($15 SGD, 3–5 business days). Express
                    options will appear at checkout where available.
                  </p>

                  <p>
                    Please note that international orders may be subject to
                    customs duties and import taxes, which are the responsibility
                    of the recipient. We are unable to predict or control these
                    charges, as they vary by country.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── RETURNS POLICY ───────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: "var(--hc-warm-white)",
            borderTop: "1px solid var(--hc-stone)",
            borderBottom: "1px solid var(--hc-stone)",
          }}
        >
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <FadeUp>
                <p className="hc-eyebrow mb-4">Peace of Mind</p>
                <h2
                  className="text-2xl md:text-3xl mb-8 leading-tight"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    color: "var(--hc-espresso)",
                    fontWeight: 400,
                  }}
                >
                  Returns & Exchanges
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div
                  className="space-y-6"
                  style={{
                    fontFamily: "'Karla', sans-serif",
                    color: "var(--hc-sienna)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                  }}
                >
                  <p>
                    We want you to be completely satisfied with your purchase. If
                    for any reason you are not, we offer a straightforward return
                    process designed to be as considered as the objects we sell.
                  </p>

                  <div className="space-y-4">
                    <h3
                      className="text-base"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        color: "var(--hc-espresso)",
                        fontWeight: 400,
                      }}
                    >
                      How to Return an Item
                    </h3>
                    <ol
                      className="space-y-3 pl-5"
                      style={{ listStyleType: "decimal" }}
                    >
                      <li>
                        <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                          Contact us
                        </strong>{" "}
                        within 14 days of delivery at{" "}
                        <a
                          href="mailto:hello@hearthcurated.com"
                          className="underline underline-offset-2 transition-opacity hover:opacity-60"
                          style={{ color: "var(--hc-sienna)" }}
                        >
                          hello@hearthcurated.com
                        </a>{" "}
                        with your order number and reason for return.
                      </li>
                      <li>
                        <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                          Receive your return label.
                        </strong>{" "}
                        For Singapore orders, we will email you a prepaid return
                        shipping label. For international orders, we will provide
                        return instructions.
                      </li>
                      <li>
                        <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                          Pack and ship.
                        </strong>{" "}
                        Please return the item in its original packaging, unused
                        and undamaged. Drop it off at any designated courier
                        point.
                      </li>
                      <li>
                        <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                          Refund processed.
                        </strong>{" "}
                        Once we receive and inspect the item, your refund will be
                        processed within 3–5 business days to your original
                        payment method.
                      </li>
                    </ol>
                  </div>

                  <div
                    className="p-6 mt-4"
                    style={{
                      backgroundColor: "var(--hc-parchment)",
                      border: "1px solid var(--hc-stone)",
                    }}
                  >
                    <h4
                      className="text-sm mb-3"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        color: "var(--hc-espresso)",
                        fontWeight: 400,
                      }}
                    >
                      Non-Returnable Items
                    </h4>
                    <ul
                      className="space-y-1.5 text-sm"
                      style={{
                        fontFamily: "'Karla', sans-serif",
                        color: "var(--hc-sienna)",
                        lineHeight: 1.7,
                      }}
                    >
                      <li>• Candles that have been lit or used</li>
                      <li>• Food and drink items (NOURISH collection)</li>
                      <li>• Items that have been washed, altered, or damaged by the customer</li>
                      <li>• Gift cards</li>
                    </ul>
                  </div>

                  <p>
                    <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
                      Damaged items:
                    </strong>{" "}
                    If your order arrives damaged, please contact us within 48
                    hours with photographs. We will arrange a full replacement or
                    refund at no cost to you, including return shipping.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "var(--hc-parchment)" }}
        >
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <FadeUp>
                <p className="hc-eyebrow mb-4">Common Questions</p>
                <h2
                  className="text-2xl md:text-3xl mb-10 leading-tight"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    color: "var(--hc-espresso)",
                    fontWeight: 400,
                  }}
                >
                  Frequently Asked
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div style={{ borderTop: "1px solid var(--hc-stone)" }}>
                  {FAQS.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaq === i}
                      onToggle={() =>
                        setOpenFaq(openFaq === i ? null : i)
                      }
                    />
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ──────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20"
          style={{
            backgroundColor: "var(--hc-espresso)",
          }}
        >
          <div className="container text-center">
            <FadeUp>
              <div
                className="w-14 h-14 mx-auto mb-6 flex items-center justify-center"
                style={{ border: "1px solid rgba(196,185,170,0.3)" }}
              >
                <Mail
                  size={22}
                  strokeWidth={1.2}
                  style={{ color: "var(--hc-sand)" }}
                />
              </div>
              <h2
                className="text-2xl md:text-3xl mb-4 leading-tight"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-parchment)",
                  fontWeight: 400,
                }}
              >
                Still Have Questions?
              </h2>
              <p
                className="text-sm md:text-base mb-8 max-w-md mx-auto"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sand)",
                  lineHeight: 1.7,
                }}
              >
                We are here to help. Reach out and we will respond within one
                business day.
              </p>
              <a
                href="mailto:hello@hearthcurated.com"
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
                hello@hearthcurated.com
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
