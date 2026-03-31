// HEARTH CURATED — Currency Context
// Provides multi-currency support with client-side conversion.
// Base currency is SGD (all product prices are stored in SGD).
// Exchange rates are fetched from Frankfurter API on mount, with hardcoded fallbacks.
// User preference is persisted in localStorage.

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

// ── Supported currencies ────────────────────────────────────────────

export type CurrencyCode = "SGD" | "USD" | "EUR" | "GBP" | "AUD" | "JPY" | "CAD";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  locale: string;
  decimals: number; // JPY uses 0 decimals
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  SGD: { code: "SGD", symbol: "S$", name: "Singapore Dollar", locale: "en-SG", decimals: 2 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US", decimals: 2 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", locale: "de-DE", decimals: 2 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB", decimals: 2 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", locale: "en-AU", decimals: 2 },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", locale: "ja-JP", decimals: 0 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", locale: "en-CA", decimals: 2 },
};

export const CURRENCY_CODES = Object.keys(CURRENCIES) as CurrencyCode[];

// ── Fallback exchange rates (SGD base) ──────────────────────────────
// These are approximate rates as of March 2026 and serve as fallbacks
// when the API is unavailable.

const FALLBACK_RATES: Record<CurrencyCode, number> = {
  SGD: 1,
  USD: 0.75,
  EUR: 0.69,
  GBP: 0.59,
  AUD: 1.15,
  JPY: 112.5,
  CAD: 1.03,
};

// ── Context ─────────────────────────────────────────────────────────

interface CurrencyContextValue {
  currency: CurrencyCode;
  currencyInfo: CurrencyInfo;
  setCurrency: (code: CurrencyCode) => void;
  /** Convert an SGD amount to the selected currency and format it for display */
  formatPrice: (sgdAmount: number, options?: { showCode?: boolean; compact?: boolean }) => string;
  /** Convert an SGD amount to the selected currency (raw number) */
  convertPrice: (sgdAmount: number) => number;
  /** The exchange rate from SGD to the selected currency */
  rate: number;
  /** Whether live rates have been loaded */
  ratesLoaded: boolean;
}

const CURRENCY_STORAGE_KEY = "hearth-curated-currency";

function getStoredCurrency(): CurrencyCode {
  try {
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (stored && stored in CURRENCIES) return stored as CurrencyCode;
  } catch {
    // silent
  }
  return "SGD";
}

// Use globalThis to keep a stable context reference across HMR updates
const CTX_KEY = "__HEARTH_CURRENCY_CTX__" as const;
const globalRef = globalThis as unknown as Record<
  string,
  ReturnType<typeof createContext<CurrencyContextValue | null>>
>;
if (!globalRef[CTX_KEY]) {
  globalRef[CTX_KEY] = createContext<CurrencyContextValue | null>(null);
}
const CurrencyContext = globalRef[CTX_KEY];

// ── Provider ────────────────────────────────────────────────────────

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(getStoredCurrency);
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(FALLBACK_RATES);
  const [ratesLoaded, setRatesLoaded] = useState(false);

  // Fetch live rates from Frankfurter API on mount
  useEffect(() => {
    let cancelled = false;
    async function fetchRates() {
      try {
        const targetCurrencies = CURRENCY_CODES.filter((c) => c !== "SGD").join(",");
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=SGD&symbols=${targetCurrencies}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
        const newRates: Record<CurrencyCode, number> = { SGD: 1 } as any;
        for (const code of CURRENCY_CODES) {
          if (code === "SGD") continue;
          if (data.rates?.[code]) {
            newRates[code] = data.rates[code];
          } else {
            newRates[code] = FALLBACK_RATES[code];
          }
        }
        setRates(newRates);
        setRatesLoaded(true);
      } catch (err) {
        console.warn("Failed to fetch exchange rates, using fallbacks:", err);
        if (!cancelled) setRatesLoaded(true);
      }
    }
    fetchRates();
    return () => { cancelled = true; };
  }, []);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, code);
    } catch {
      // silent
    }
  }, []);

  const rate = rates[currency];
  const currencyInfo = CURRENCIES[currency];

  const convertPrice = useCallback(
    (sgdAmount: number): number => {
      return sgdAmount * rate;
    },
    [rate]
  );

  const formatPrice = useCallback(
    (sgdAmount: number, options?: { showCode?: boolean; compact?: boolean }): string => {
      const converted = sgdAmount * rate;
      const info = CURRENCIES[currency];
      const { showCode = false, compact = false } = options ?? {};

      // Format the number
      let formatted: string;
      if (compact && info.decimals > 0) {
        // Compact mode: no decimal places (used in product cards)
        formatted = Math.round(converted).toString();
      } else {
        formatted = converted.toFixed(info.decimals);
      }

      // Build the display string
      let result = `${info.symbol}${formatted}`;
      if (showCode) {
        result += ` ${info.code}`;
      }
      return result;
    },
    [rate, currency]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencyInfo,
        setCurrency,
        formatPrice,
        convertPrice,
        rate,
        ratesLoaded,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (!context) {
    // HMR fallback
    return {
      currency: "SGD",
      currencyInfo: CURRENCIES.SGD,
      setCurrency: () => {},
      formatPrice: (amount) => `S$${amount.toFixed(2)}`,
      convertPrice: (amount) => amount,
      rate: 1,
      ratesLoaded: false,
    };
  }
  return context;
}
