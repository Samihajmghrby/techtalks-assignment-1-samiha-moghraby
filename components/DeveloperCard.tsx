import Link from "next/link";
import type { Developer } from "@/data/developers";
import { formatDate } from "@/lib/format";

/**
 * Server Component shared by /developers, /developers/top-rated and
 * /developers/new-members. The `highlight` prop decides which single number
 * the card leads with, so the same card can serve all three lists.
 */
export default function DeveloperCard({
  developer,
  highlight = "posts",
}: {
  developer: Developer;
  highlight?: "posts" | "rating" | "joined";
}) {
  const highlightText =
    highlight === "rating"
      ? `${developer.rating.toFixed(1)} rating`
      : highlight === "joined"
        ? `Joined ${formatDate(developer.joinedAt)}`
        : `${developer.postCount} ${developer.postCount === 1 ? "post" : "posts"}`;

  return (
    <Link
      href={`/developers/${developer.username}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink font-mono text-sm font-bold text-paper"
        >
          {developer.avatar}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold">{developer.name}</h3>
          <p className="truncate font-mono text-[11px] text-muted">
            @{developer.username}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold text-moss-deep">
        {developer.title}
      </p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {developer.bio}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {developer.skills.slice(0, 3).map((skill) => (
          <li
            key={skill}
            className="rounded-md bg-paper px-2 py-1 font-mono text-[11px] text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px]">
        <span className="text-muted">{developer.location}</span>
        <span className="text-ink">{highlightText}</span>
      </div>
    </Link>
  );
}
