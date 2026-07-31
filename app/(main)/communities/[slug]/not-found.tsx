import Link from "next/link";
import { communities } from "@/data/communities";

/**
 * Route-level not-found. Triggered by notFound() inside
 * app/(main)/communities/[slug]/page.tsx when the slug is unknown.
 */
export default function CommunityNotFound() {
  return (
    <div className="py-10">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        404 · community
      </p>
      <h1 className="mt-4 text-3xl font-bold">No community with that slug</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        Community pages are served from static data, so only these slugs
        resolve. Pick one below or go back to the full list.
      </p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {communities.map((community) => (
          <li key={community.slug}>
            <Link
              href={`/communities/${community.slug}`}
              className="inline-block rounded-lg border border-line bg-card px-3 py-2 font-mono text-xs transition-colors hover:border-ink"
            >
              /communities/{community.slug}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/communities"
        className="mt-8 inline-block rounded-lg bg-moss px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-moss-deep"
      >
        All communities
      </Link>
    </div>
  );
}
