"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string; level: number };

/**
 * Builds the "On this page" list from the h2/h3 headings in the article
 * (rehype-slug already gave them ids) and highlights the one in view.
 */
export function TableOfContents() {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const heads = Array.from(
      document.querySelectorAll<HTMLElement>(".doc h2[id], .doc h3[id]")
    );
    setItems(
      heads.map((h) => ({
        id: h.id,
        text: h.textContent ?? "",
        level: h.tagName === "H2" ? 2 : 3,
      }))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    heads.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (!items.length) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-semibold">On this page</p>
      <ul className="space-y-1.5 border-l border-[var(--border)]">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l py-0.5 transition ${
                i.level === 3 ? "pl-6" : "pl-3"
              } ${
                active === i.id
                  ? "border-[var(--accent)] font-medium text-[var(--accent)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
