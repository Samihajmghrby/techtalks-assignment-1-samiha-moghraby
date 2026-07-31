import type { ReactNode } from "react";

/**
 * Reusable presentational primitives. These are Server Components: they hold
 * no state and never run in the browser.
 */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-line bg-card p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardGrid({
  children,
  columns = 3,
}: {
  children: ReactNode;
  columns?: 2 | 3;
}) {
  const columnClass =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return <div className={`grid grid-cols-1 gap-4 ${columnClass}`}>{children}</div>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-paper px-2 py-1 font-mono text-[11px] tracking-tight text-muted">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
      {children}
    </span>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-line pl-3">
      <div className="font-mono text-lg leading-tight text-ink">{value}</div>
      <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
    </div>
  );
}
