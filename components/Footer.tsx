import Link from "next/link";

const columns = [
  {
    heading: "Platform",
    links: [
      { href: "/communities", label: "Communities" },
      { href: "/topics", label: "Topics" },
      { href: "/developers", label: "Developers" },
    ],
  },
  {
    heading: "Members",
    links: [
      { href: "/developers/top-rated", label: "Top rated" },
      { href: "/developers/new-members", label: "New members" },
      { href: "/about", label: "About TechTalks" },
    ],
  },
];

/** Server Component. Rendered once in the root layout, shared by every page. */
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="grid h-7 w-7 place-items-center rounded-md bg-ink font-mono text-xs font-bold text-paper"
            >
              TT
            </span>
            <span className="text-[15px] font-bold tracking-tight">
              TechTalks
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            A place for developers to find a community, follow a topic and read
            what other people are working on.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 font-mono text-[11px] text-muted sm:px-6">
          TechTalks Bootcamp — Assignment 1. Static data, no database, no
          authentication.
        </p>
      </div>
    </footer>
  );
}
