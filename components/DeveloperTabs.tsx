import Link from "next/link";

const tabs = [
  { href: "/developers", label: "All developers" },
  { href: "/developers/top-rated", label: "Top rated" },
  { href: "/developers/new-members", label: "New members" },
];

/**
 * Server Component. The active tab is passed in as a prop by each page rather
 * than read from the router, so this stays off the client bundle.
 */
export default function DeveloperTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Developer lists" className="mt-8">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.href === active;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block rounded-lg border px-3.5 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-moss bg-mint font-semibold text-moss-deep"
                    : "border-line bg-card text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
