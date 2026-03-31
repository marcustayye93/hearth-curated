// HEARTH CURATED — Currency Selector
// Compact dropdown for the footer bottom bar and announcement bar.
// Matches the editorial design language: Karla font, espresso/parchment palette.

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  useCurrency,
  CURRENCIES,
  CURRENCY_CODES,
  type CurrencyCode,
} from "@/contexts/CurrencyContext";

interface CurrencySelectorProps {
  /** "light" for dark backgrounds (footer), "dark" for light backgrounds */
  variant?: "light" | "dark";
}

export default function CurrencySelector({ variant = "light" }: CurrencySelectorProps) {
  const { currency, setCurrency, currencyInfo } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const isLight = variant === "light";
  const textColor = isLight ? "var(--hc-stone)" : "var(--hc-espresso)";
  const hoverBg = isLight ? "rgba(242,237,228,0.1)" : "rgba(28,16,8,0.05)";
  const dropdownBg = isLight ? "var(--hc-espresso)" : "var(--hc-parchment)";
  const dropdownBorder = isLight ? "rgba(196,185,170,0.3)" : "var(--hc-stone)";
  const activeColor = isLight ? "var(--hc-parchment)" : "var(--hc-espresso)";
  const inactiveColor = isLight ? "var(--hc-stone)" : "var(--hc-sienna)";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs tracking-wide transition-opacity hover:opacity-70 py-1 px-1.5"
        style={{
          fontFamily: "'Karla', sans-serif",
          color: textColor,
        }}
        aria-label={`Currency: ${currencyInfo.name}. Click to change.`}
        aria-expanded={open}
      >
        <span className="font-medium">{currencyInfo.symbol}</span>
        <span>{currency}</span>
        <ChevronDown
          size={11}
          strokeWidth={1.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute bottom-full mb-2 left-0 py-1.5 z-50 min-w-[180px]"
          style={{
            backgroundColor: dropdownBg,
            border: `1px solid ${dropdownBorder}`,
            boxShadow: "0 -4px 20px rgba(28,16,8,0.12)",
          }}
        >
          {CURRENCY_CODES.map((code) => {
            const info = CURRENCIES[code];
            const isActive = code === currency;
            return (
              <button
                key={code}
                onClick={() => {
                  setCurrency(code as CurrencyCode);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-xs tracking-wide transition-colors flex items-center justify-between gap-3"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: isActive ? activeColor : inactiveColor,
                  fontWeight: isActive ? 600 : 400,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = hoverBg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <span>
                  <span className="inline-block w-6">{info.symbol}</span>
                  {info.code}
                </span>
                <span
                  className="text-[10px] opacity-60"
                  style={{ fontWeight: 400 }}
                >
                  {info.name}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
