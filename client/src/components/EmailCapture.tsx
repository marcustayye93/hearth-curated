// HEARTH CURATED — Email Capture Popup
// Design: Minimal, editorial, exit-intent triggered
// Shows once per session, stores dismissal in sessionStorage
// Connected to Shopify Customers API via tRPC

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { trpc } from "@/lib/trpc";

const STORAGE_KEY = "hc-email-popup-dismissed";

export default function EmailCapture() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const subscribe = trpc.shopify.newsletterSubscribe.useMutation();

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {}
  }, []);

  useEffect(() => {
    // Don't show if already dismissed this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    // Show after 30 seconds OR on exit-intent (mouse leaving viewport top)
    const timer = setTimeout(() => setVisible(true), 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;
    setError("");
    setSubmitting(true);

    try {
      const result = await subscribe.mutateAsync({ email: email.trim() });
      if (result.success) {
        setSubmitted(true);
        setTimeout(dismiss, 2500);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(28,16,8,0.6)" }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md p-8 md:p-10"
        style={{ backgroundColor: "var(--hc-parchment)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1 transition-opacity hover:opacity-60"
          aria-label="Close"
          style={{ color: "var(--hc-espresso)" }}
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <p
              className="text-2xl mb-3"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                color: "var(--hc-espresso)",
                fontWeight: 400,
              }}
            >
              Welcome to the Hearth
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-sienna)" }}
            >
              We'll be in touch with considered things.
            </p>
          </div>
        ) : (
          <>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'Karla', sans-serif",
                color: "var(--hc-sienna)",
                fontWeight: 500,
                letterSpacing: "0.18em",
              }}
            >
              Join the Hearth
            </p>
            <h2
              className="text-2xl md:text-3xl mb-3 leading-tight"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                color: "var(--hc-espresso)",
                fontWeight: 400,
              }}
            >
              10% off your first order
            </h2>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-sienna)" }}
            >
              Subscribe for early access to new arrivals, editorial features, and a welcome discount on your first purchase.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={submitting}
                  className="flex-1 px-4 py-3 text-sm outline-none"
                  style={{
                    border: "1px solid var(--hc-stone)",
                    backgroundColor: "transparent",
                    fontFamily: "'Karla', sans-serif",
                    color: "var(--hc-espresso)",
                    opacity: submitting ? 0.6 : 1,
                  }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 text-xs tracking-widest uppercase shrink-0 w-full sm:w-auto"
                  style={{
                    backgroundColor: "var(--hc-espresso)",
                    color: "var(--hc-parchment)",
                    fontFamily: "'Karla', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    border: "1px solid var(--hc-espresso)",
                    opacity: submitting ? 0.6 : 1,
                  }}
                >
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {error && (
                <p
                  className="text-xs mt-2"
                  style={{ fontFamily: "'Karla', sans-serif", color: "#c44" }}
                >
                  {error}
                </p>
              )}
            </form>
            <p
              className="text-[10px] mt-3"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-stone)" }}
            >
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
