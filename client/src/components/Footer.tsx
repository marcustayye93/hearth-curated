// HEARTH CURATED — Footer Component
// Design: Minimal, editorial — espresso background, parchment text
// Aesop-style quote, newsletter signup, clean link columns

import { COLLECTIONS } from "@/lib/products";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--hc-espresso)", color: "var(--hc-parchment)" }}>
      {/* Quote band */}
      <div
        className="py-14 md:py-20 text-center px-6"
        style={{ borderBottom: "1px solid rgba(196,185,170,0.15)" }}
      >
        <blockquote
          className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400 }}
        >
          "The objects we choose for our homes are a quiet autobiography."
        </blockquote>
      </div>

      {/* Newsletter */}
      <div
        className="py-12 px-6 text-center"
        style={{ borderBottom: "1px solid rgba(196,185,170,0.15)" }}
      >
        <p className="hc-eyebrow mb-3" style={{ color: "var(--hc-stone)" }}>
          Subscribe to Hearth Curated
        </p>
        <p
          className="text-sm mb-6 max-w-sm mx-auto"
          style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif", lineHeight: 1.7 }}
        >
          New arrivals, considered essays, and occasional discoveries — delivered quietly.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
            style={{
              border: "1px solid rgba(196,185,170,0.4)",
              color: "var(--hc-parchment)",
              fontFamily: "'Karla', sans-serif",
            }}
          />
          <button
            type="submit"
            className="hc-btn-outline text-xs"
            style={{
              borderColor: "rgba(196,185,170,0.4)",
              color: "var(--hc-parchment)",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span
              className="text-lg tracking-tight block mb-4"
              style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
            >
              Hearth Curated
            </span>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif", maxWidth: "200px" }}
            >
              Objects for the intentional home. Kitchen, fragrance, botanicals, and artisan food.
            </p>
          </div>

          {/* Collections */}
          <div>
            <p className="hc-eyebrow mb-4" style={{ color: "var(--hc-stone)" }}>Collections</p>
            <ul className="space-y-2.5">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}>
                  <a
                    href={`/collections/${col.slug}`}
                    className="text-xs tracking-wide transition-opacity hover:opacity-60"
                    style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
                  >
                    {col.name} — {col.tagline}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="hc-eyebrow mb-4" style={{ color: "var(--hc-stone)" }}>Support</p>
            <ul className="space-y-2.5">
              {["Shipping & Returns", "FAQs", "Contact Us", "Order Tracking"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs tracking-wide transition-opacity hover:opacity-60"
                    style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="hc-eyebrow mb-4" style={{ color: "var(--hc-stone)" }}>About</p>
            <ul className="space-y-2.5">
              {["Our Story", "Sustainability", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs tracking-wide transition-opacity hover:opacity-60"
                    style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(196,185,170,0.15)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
          >
            © 2026 Hearth Curated. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-opacity hover:opacity-60"
                style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
