import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "hc-recently-viewed";
const MAX_ITEMS = 8;

/**
 * Hook to track and retrieve recently viewed product slugs.
 * Stores up to MAX_ITEMS slugs in localStorage, most recent first.
 */
export function useRecentlyViewed(currentSlug?: string) {
  const [slugs, setSlugs] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setSlugs(parsed);
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Add current product to recently viewed
  useEffect(() => {
    if (!currentSlug) return;

    setSlugs((prev) => {
      const filtered = prev.filter((s) => s !== currentSlug);
      const updated = [currentSlug, ...filtered].slice(0, MAX_ITEMS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  }, [currentSlug]);

  // Return recently viewed slugs excluding the current product
  const recentlyViewed = currentSlug
    ? slugs.filter((s) => s !== currentSlug)
    : slugs;

  return { recentlyViewed };
}
