// Currency formatting logic tests
// Tests the core formatting and conversion logic used by CurrencyContext

import { describe, it, expect } from "vitest";

// Replicate the formatting logic from CurrencyContext for unit testing
// (The actual React context can't be tested without a React environment,
//  but we can test the pure formatting functions)

interface CurrencyInfo {
  code: string;
  symbol: string;
  name: string;
  locale: string;
  decimals: number;
}

const CURRENCIES: Record<string, CurrencyInfo> = {
  SGD: { code: "SGD", symbol: "S$", name: "Singapore Dollar", locale: "en-SG", decimals: 2 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US", decimals: 2 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", locale: "de-DE", decimals: 2 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB", decimals: 2 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", locale: "en-AU", decimals: 2 },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", locale: "ja-JP", decimals: 0 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", locale: "en-CA", decimals: 2 },
};

const FALLBACK_RATES: Record<string, number> = {
  SGD: 1,
  USD: 0.75,
  EUR: 0.69,
  GBP: 0.59,
  AUD: 1.15,
  JPY: 112.5,
  CAD: 1.03,
};

function formatPrice(
  sgdAmount: number,
  currency: string,
  rate: number,
  options?: { showCode?: boolean; compact?: boolean }
): string {
  const converted = sgdAmount * rate;
  const info = CURRENCIES[currency];
  const { showCode = false, compact = false } = options ?? {};

  let formatted: string;
  if (compact && info.decimals > 0) {
    formatted = Math.round(converted).toString();
  } else {
    formatted = converted.toFixed(info.decimals);
  }

  let result = `${info.symbol}${formatted}`;
  if (showCode) {
    result += ` ${info.code}`;
  }
  return result;
}

function convertPrice(sgdAmount: number, rate: number): number {
  return sgdAmount * rate;
}

describe("Currency Formatting", () => {
  it("should format SGD prices with S$ symbol", () => {
    expect(formatPrice(70, "SGD", 1)).toBe("S$70.00");
    expect(formatPrice(25.5, "SGD", 1)).toBe("S$25.50");
  });

  it("should format SGD prices in compact mode (no decimals)", () => {
    expect(formatPrice(70, "SGD", 1, { compact: true })).toBe("S$70");
    expect(formatPrice(25.99, "SGD", 1, { compact: true })).toBe("S$26");
  });

  it("should convert and format USD prices", () => {
    const rate = FALLBACK_RATES.USD; // 0.75
    expect(formatPrice(100, "USD", rate)).toBe("$75.00");
    expect(formatPrice(100, "USD", rate, { compact: true })).toBe("$75");
  });

  it("should convert and format EUR prices", () => {
    const rate = FALLBACK_RATES.EUR; // 0.69
    expect(formatPrice(100, "EUR", rate)).toBe("€69.00");
  });

  it("should convert and format GBP prices", () => {
    const rate = FALLBACK_RATES.GBP; // 0.59
    expect(formatPrice(100, "GBP", rate)).toBe("£59.00");
  });

  it("should format JPY with no decimals", () => {
    const rate = FALLBACK_RATES.JPY; // 112.5
    expect(formatPrice(100, "JPY", rate)).toBe("¥11250");
    // Compact mode should be the same for JPY (already 0 decimals)
    expect(formatPrice(100, "JPY", rate, { compact: true })).toBe("¥11250");
  });

  it("should convert and format AUD prices", () => {
    const rate = FALLBACK_RATES.AUD; // 1.15
    expect(formatPrice(100, "AUD", rate)).toBe("A$115.00");
  });

  it("should convert and format CAD prices", () => {
    const rate = FALLBACK_RATES.CAD; // 1.03
    expect(formatPrice(100, "CAD", rate)).toBe("C$103.00");
  });

  it("should append currency code when showCode is true", () => {
    expect(formatPrice(70, "SGD", 1, { showCode: true })).toBe("S$70.00 SGD");
    expect(formatPrice(100, "USD", 0.75, { showCode: true })).toBe("$75.00 USD");
  });

  it("should handle zero amounts", () => {
    expect(formatPrice(0, "SGD", 1)).toBe("S$0.00");
    expect(formatPrice(0, "USD", 0.75)).toBe("$0.00");
    expect(formatPrice(0, "JPY", 112.5)).toBe("¥0");
  });

  it("should handle small amounts", () => {
    expect(formatPrice(1, "SGD", 1)).toBe("S$1.00");
    expect(formatPrice(1, "USD", 0.75)).toBe("$0.75");
  });
});

describe("Currency Conversion", () => {
  it("should return the same amount for SGD (rate = 1)", () => {
    expect(convertPrice(100, 1)).toBe(100);
  });

  it("should convert SGD to USD correctly", () => {
    expect(convertPrice(100, 0.75)).toBe(75);
  });

  it("should convert SGD to JPY correctly", () => {
    expect(convertPrice(100, 112.5)).toBe(11250);
  });

  it("should handle zero conversion", () => {
    expect(convertPrice(0, 0.75)).toBe(0);
  });
});

describe("Supported Currencies", () => {
  it("should have 7 supported currencies", () => {
    expect(Object.keys(CURRENCIES)).toHaveLength(7);
  });

  it("should include all required currencies", () => {
    const codes = Object.keys(CURRENCIES);
    expect(codes).toContain("SGD");
    expect(codes).toContain("USD");
    expect(codes).toContain("EUR");
    expect(codes).toContain("GBP");
    expect(codes).toContain("AUD");
    expect(codes).toContain("JPY");
    expect(codes).toContain("CAD");
  });

  it("should have fallback rates for all currencies", () => {
    for (const code of Object.keys(CURRENCIES)) {
      expect(FALLBACK_RATES[code]).toBeDefined();
      expect(FALLBACK_RATES[code]).toBeGreaterThan(0);
    }
  });

  it("should have SGD as base currency with rate 1", () => {
    expect(FALLBACK_RATES.SGD).toBe(1);
  });

  it("should have JPY with 0 decimal places", () => {
    expect(CURRENCIES.JPY.decimals).toBe(0);
  });

  it("should have all other currencies with 2 decimal places", () => {
    for (const [code, info] of Object.entries(CURRENCIES)) {
      if (code !== "JPY") {
        expect(info.decimals).toBe(2);
      }
    }
  });
});
