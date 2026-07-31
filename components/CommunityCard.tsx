import Link from "next/link";
import type { Community } from "@/data/communities";
import { formatCount } from "@/lib/format";

/** Server Component used by /communities and the home page. */
export default function CommunityCard({ community }: { community: Community }) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold">{community.name}</h3>
        <span className="shrink-0 rounded-md bg-paper px-2 py-1 font-mono text-[11px] text-muted">
          {community.category}
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {community.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-[11px] text-muted">
          /communities/{community.slug}
        </span>
        <span className="font-mono text-[11px] text-ink">
          {formatCount(community.members)} members
        </span>
      </div>

      <span className="mt-3 text-sm font-semibold text-moss group-hover:underline">
        View community →
      </span>
    </Link>
  );
}
