import type { ReactNode } from "react";

/**
 * Numbered step list. Use <Step title="..."> inside <Steps>.
 * Numbers come from a CSS counter so the MDX stays clean.
 */
export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 ml-3 border-l border-[var(--border)] pl-8 [counter-reset:step]">
      {children}
    </div>
  );
}

export function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative pb-8 last:pb-0 [counter-increment:step]">
      <span
        aria-hidden
        className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-sm font-semibold text-[var(--accent)] before:content-[counter(step)]"
      />
      <h3
        id={title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}
        className="!mt-0 !mb-2 text-lg font-semibold"
      >
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
}
