import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import { Card, Stat } from "@/components/Card";
import { developers, getDeveloperByUsername } from "@/data/developers";
import { getPostsByAuthor } from "@/data/posts";
import { getCommunityBySlug } from "@/data/communities";
import { formatDate } from "@/lib/format";

/**
 * Dynamic route: one file serves every profile, e.g. /developers/samiha.
 * `params` is awaited because Next.js 16 passes it as a Promise.
 */

type PageProps = {
  params: Promise<{ username: string }>;
};

export function generateStaticParams() {
  return developers.map((developer) => ({ username: developer.username }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username } = await params;
  const developer = getDeveloperByUsername(username);

  if (!developer) {
    return { title: "Developer not found" };
  }

  return {
    title: `${developer.name} (@${developer.username})`,
    description: developer.bio,
  };
}

export default async function DeveloperProfilePage({ params }: PageProps) {
  const { username } = await params;
  const developer = getDeveloperByUsername(username);

  if (!developer) {
    notFound();
  }

  const authorPosts = getPostsByAuthor(developer.username);

  return (
    <>
      <PageHeader
        urlPath={`/developers/${developer.username}`}
        filePath="app/(main)/developers/[username]/page.tsx"
        title={developer.name}
        // Required fields: role/title and short bio.
        description={developer.bio}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Developers", href: "/developers" },
          { label: `@${developer.username}`, href: `/developers/${developer.username}` },
        ]}
      />

      <section className="mt-8 flex flex-wrap items-center gap-4">
        <span
          aria-hidden="true"
          className="grid h-16 w-16 place-items-center rounded-xl bg-ink font-mono text-lg font-bold text-paper"
        >
          {developer.avatar}
        </span>
        <div>
          <p className="font-mono text-sm text-muted">@{developer.username}</p>
          <p className="mt-1 text-lg font-bold text-moss-deep">
            {developer.title}
          </p>
          <p className="mt-1 font-mono text-[11px] text-muted">
            {developer.location} · joined {formatDate(developer.joinedAt)}
          </p>
        </div>
      </section>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
        <Stat label="Rating" value={developer.rating.toFixed(1)} />
        <Stat label="Posts" value={String(developer.postCount)} />
        <Stat label="Communities" value={String(developer.communities.length)} />
        <Stat label="Skills" value={String(developer.skills.length)} />
      </dl>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="border-b border-line pb-4 text-2xl font-bold">
            Posts by {developer.name.split(" ")[0]}
          </h2>
          {authorPosts.length > 0 ? (
            <div className="mt-6 space-y-4">
              {authorPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              This member has not published a post yet.
            </p>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Skills
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {developer.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line px-2.5 py-1.5 font-mono text-[11px] text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Communities
            </h2>
            <ul className="mt-4 space-y-2">
              {developer.communities.map((slug) => {
                const community = getCommunityBySlug(slug);
                if (!community) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/communities/${slug}`}
                      className="text-sm font-semibold text-moss underline-offset-4 hover:underline"
                    >
                      {community.name} →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
