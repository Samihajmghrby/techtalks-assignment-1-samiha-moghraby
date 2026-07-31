import Link from "next/link";

/**
 * Route-level not-found for the [username] segment. It also catches
 * notFound() from the nested posts/[postId] route below it.
 */
export default function DeveloperNotFound() {
  return (
    <div className="py-10">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        404 · developer
      </p>
      <h1 className="mt-4 text-3xl font-bold">
        That profile or post does not exist
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        Either no member has that username, or the post id does not belong to
        them. Posts are only reachable under the developer who wrote them.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/developers"
          className="inline-block rounded-lg bg-moss px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-moss-deep"
        >
          All developers
        </Link>
        <Link
          href="/developers/samiha/posts/1"
          className="inline-block rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-ink"
        >
          Read an example post
        </Link>
      </div>
    </div>
  );
}
