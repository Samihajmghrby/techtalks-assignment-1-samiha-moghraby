import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { getDeveloperByUsername } from "@/data/developers";
import { getPostByAuthorAndId, getPostsByAuthor, posts } from "@/data/posts";
import { getCommunityBySlug } from "@/data/communities";
import { formatDate } from "@/lib/format";

/**
 * Nested dynamic route: /developers/[username]/posts/[postId]
 * for example /developers/samiha/posts/1
 *
 * BOTH params are used. The lookup requires the post id to exist AND the post
 * to belong to that author, so /developers/omar-dev/posts/1 is a 404 even
 * though post 1 exists — it belongs to samiha.
 */

type PageProps = {
  params: Promise<{ username: string; postId: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    username: post.authorUsername,
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, postId } = await params;
  const post = getPostByAuthorAndId(username, postId);

  if (!post) {
    return { title: "Post not found" };
  }

  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: PageProps) {
  const { username, postId } = await params;

  const author = getDeveloperByUsername(username);
  const post = getPostByAuthorAndId(username, postId);

  if (!author || !post) {
    notFound();
  }

  const community = getCommunityBySlug(post.community);
  const otherPosts = getPostsByAuthor(author.username).filter(
    (item) => item.id !== post.id
  );

  return (
    <article>
      <PageHeader
        urlPath={`/developers/${author.username}/posts/${post.id}`}
        filePath="app/(main)/developers/[username]/posts/[postId]/page.tsx"
        title={post.title}
        description={post.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Developers", href: "/developers" },
          { label: `@${author.username}`, href: `/developers/${author.username}` },
          {
            label: `post ${post.id}`,
            href: `/developers/${author.username}/posts/${post.id}`,
          },
        ]}
      />

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-muted">
        <span>post id: {post.id}</span>
        <span aria-hidden="true">·</span>
        <span>author: @{post.authorUsername}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.publishedAt)}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readingMinutes} min read</span>
        <span aria-hidden="true">·</span>
        <span>{post.replies} replies</span>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="max-w-2xl space-y-5 border-l-2 border-line pl-6 text-base leading-relaxed text-ink">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Written by
            </h2>
            <Link
              href={`/developers/${author.username}`}
              className="mt-4 flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink font-mono text-sm font-bold text-paper"
              >
                {author.avatar}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-bold">{author.name}</span>
                <span className="block truncate font-mono text-[11px] text-muted">
                  @{author.username}
                </span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {author.title}
            </p>
            {community && (
              <p className="mt-4 border-t border-line pt-4 text-sm">
                <span className="text-muted">Posted in </span>
                <Link
                  href={`/communities/${community.slug}`}
                  className="font-semibold text-moss underline-offset-4 hover:underline"
                >
                  {community.name}
                </Link>
              </p>
            )}
          </Card>

          {otherPosts.length > 0 && (
            <Card>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                More from @{author.username}
              </h2>
              <ul className="mt-4 space-y-3">
                {otherPosts.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/developers/${author.username}/posts/${item.id}`}
                      className="text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <Link
          href={`/developers/${author.username}`}
          className="font-mono text-xs text-moss underline-offset-4 hover:underline"
        >
          ← back to @{author.username}
        </Link>
      </div>
    </article>
  );
}
