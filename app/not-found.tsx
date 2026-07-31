import Link from "next/link";

const destinations = [
  { href: "/communities", label: "Communities" },
  { href: "/topics", label: "Topics" },
  { href: "/developers", label: "Developers" },
];

/** Shown for any URL that does not match a route in app/. */
export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
        There is nothing at this address
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        The URL does not match any route in this app. Check the spelling, or
        start from one of the sections below.
      </p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {destinations.map((destination) => (
          <li key={destination.href}>
            <Link
              href={destination.href}
              className="inline-block rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-ink"
            >
              {destination.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/"
            className="inline-block rounded-lg bg-moss px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-moss-deep"
          >
            Back to home
          </Link>
        </li>
      </ul>
    </main>
  );
}
