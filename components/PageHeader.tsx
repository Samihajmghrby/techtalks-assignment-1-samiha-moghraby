import Link from "next/link";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * The route trail is this project's signature element. Because the subject of
 * the platform is routing, every page states the URL it answers to and the
 * file that renders it, in mono, above the title.
 */
export function RouteTrail({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <Fragment key={crumb.href}>
              <li>
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="text-line">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default function PageHeader({
  title,
  description,
  urlPath,
  filePath,
  crumbs,
}: {
  title: string;
  description: string;
  urlPath: string;
  filePath: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="border-b border-line pb-8">
      {crumbs && crumbs.length > 0 && <RouteTrail crumbs={crumbs} />}

      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-[2px] bg-moss"
        />
        <span className="font-mono text-xs tracking-tight text-moss">
          {urlPath}
        </span>
      </div>

      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        {description}
      </p>

      <p className="mt-5 font-mono text-[11px] text-muted">
        rendered by <span className="text-ink">{filePath}</span>
      </p>
    </header>
  );
}
