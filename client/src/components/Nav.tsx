// HEARTH CURATED — Navigation Component
// Design: Nomos Rituals inspired — hamburger left, centered wordmark, icons right
// Cart badge integrated with CartContext

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { COLLECTIONS } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Announcement bar */}
      <div
        className="w-full text-center py-2.5 text-xs tracking-widest uppercase"
        style={{ backgroundColor: "var(--hc-espresso)", color: "var(--hc-parchment)" }}
      >
        Complimentary worldwide shipping on orders over $60
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 w-full transition-shadow duration-300"
        style={{
          backgroundColor: "var(--hc-parchment)",
          borderBottom: "1px solid var(--hc-stone)",
          boxShadow: scrolled ? "0 2px 20px rgba(28,16,8,0.06)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Left — hamburger + nav links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 p-1 -ml-1"
              aria-label="Open menu"
              style={{ color: "var(--hc-espresso)" }}
            >
              <Menu size={20} strokeWidth={1.5} />
              <span className="hidden md:block text-xs tracking-widest uppercase" style={{ fontFamily: "'Karla', sans-serif" }}>
                Menu
              </span>
            </button>
            <Link
              href="/shop"
              className="hidden md:block text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-espresso)" }}
            >
              Shop All
            </Link>
          </div>

          {/* Centre — wordmark */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span
              className="text-xl md:text-2xl tracking-tight"
              style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
            >
              Hearth Curated
            </span>
          </Link>

          {/* Right — icons */}
          <div className="flex items-center gap-4 md:gap-5" style={{ color: "var(--hc-espresso)" }}>
            <button aria-label="Search" className="p-1">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="p-1 hidden md:block">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              className="p-1 relative"
              onClick={openCart}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[9px] font-medium"
                  style={{
                    backgroundColor: "var(--hc-sienna)",
                    color: "var(--hc-parchment)",
                    fontFamily: "'Karla', sans-serif",
                    borderRadius: "50%",
                  }}
                >
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className="fixed inset-0 z-[100] flex transition-all duration-500"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {/* Menu panel */}
        <div
          className="w-full md:w-96 h-full flex flex-col justify-between py-10 px-8 md:px-12 transition-transform duration-500"
          style={{
            backgroundColor: "var(--hc-espresso)",
            transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div>
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 mb-14"
              style={{ color: "var(--hc-parchment)" }}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Karla', sans-serif" }}>
                Close
              </span>
            </button>

            {/* Shop All */}
            <nav className="mb-10">
              <Link
                href="/shop"
                className="block group"
              >
                <span
                  className="text-3xl md:text-4xl tracking-tight transition-colors duration-200 group-hover:opacity-70"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
                >
                  Shop All
                </span>
                <span
                  className="block text-xs tracking-widest uppercase mt-0.5"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  Browse our full collection
                </span>
              </Link>
            </nav>

            {/* Collections */}
            <nav>
              <p className="hc-eyebrow mb-6" style={{ color: "var(--hc-stone)" }}>
                Collections
              </p>
              <ul className="space-y-5">
                {COLLECTIONS.map((col) => (
                  <li key={col.slug}>
                    <Link
                      href={`/collections/${col.slug}`}
                      className="block group"
                    >
                      <span
                        className="text-3xl md:text-4xl tracking-tight transition-colors duration-200 group-hover:opacity-70"
                        style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
                      >
                        {col.name}
                      </span>
                      <span
                        className="block text-xs tracking-widest uppercase mt-0.5"
                        style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                      >
                        {col.tagline}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer links */}
          <div>
            <hr style={{ borderColor: "rgba(196,185,170,0.2)", marginBottom: "1.5rem" }} />
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-returns"
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@hearthcurated.com"
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className="flex-1 cursor-pointer transition-opacity duration-500"
          style={{ backgroundColor: "rgba(28,16,8,0.5)", opacity: menuOpen ? 1 : 0 }}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
