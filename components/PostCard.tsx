import Link from "next/link";
import type { Post } from "@/data/posts";
import { formatDate } from "@/lib/format";

/**
 * Server Component. Links to /developers/[username]/posts/[postId], which is
 * where both dynamic segments get used together.
 */
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/developers/${post.authorUsername}/posts/${post.id}`}
      className="group block rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span>post #{post.id}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.publishedAt)}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      <h3 className="mt-2 text-lg font-bold group-hover:underline">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-paper px-2 py-1 font-mono text-[11px] text-muted"
          >
            #{tag}
          </span>
        ))}
        <span className="ml-auto font-mono text-[11px] text-muted">
          {post.replies} replies
        </span>
      </div>
    </Link>
  );
}
