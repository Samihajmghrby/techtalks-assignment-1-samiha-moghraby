import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import JoinButton from "@/components/JoinButton";
import DeveloperCard from "@/components/DeveloperCard";
import PostCard from "@/components/PostCard";
import { Card, Stat } from "@/components/Card";
import { communities, getCommunityBySlug } from "@/data/communities";
import { getDevelopersByCommunity } from "@/data/developers";
import { getPostsByCommunity } from "@/data/posts";
import { getTopicBySlug } from "@/data/topics";
import { formatCount, formatDate } from "@/lib/format";

/**
 * Dynamic route. The [slug] folder means one file serves every community:
 *   /communities/web-development
 *   /communities/mobile-development
 *   /communities/ui-ux
 *   ...and any other slug in data/communities.ts
 *
 * In Next.js 16 `params` is a Promise, so the component is async and awaits it.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-renders one static page per community at build time. */
export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    return { title: "Community not found" };
  }

  return {
    title: community.name,
    description: community.description,
  };
}

export default async function CommunityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  // Unknown slug → Next.js renders the closest not-found.tsx.
  if (!community) {
    notFound();
  }

  const members = getDevelopersByCommunity(community.slug);
  const communityPosts = getPostsByCommunity(community.slug);

  return (
    <>
      <PageHeader
        urlPath={`/communities/${community.slug}`}
        filePath="app/(main)/communities/[slug]/page.tsx"
        title={community.name}
        description={community.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Communities", href: "/communities" },
          { label: community.name, href: `/communities/${community.slug}` },
        ]}
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-mint px-2.5 py-1 font-mono text-[11px] text-moss-deep">
          {community.category}
        </span>
        <span className="font-mono text-[11px] text-muted">
          slug: {community.slug}
        </span>
        <span className="font-mono text-[11px] text-muted">
          created {formatDate(community.createdAt)}
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug">
        {community.tagline}
      </p>

      {/* Interactive Client Component */}
      <div className="mt-6">
        <JoinButton
          communityName={community.name}
          members={community.members}
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
        <Stat label="Members" value={formatCount(community.members)} />
        <Stat label="Posts / week" value={String(community.postsThisWeek)} />
        <Stat label="Profiles here" value={String(members.length)} />
        <Stat label="Topics" value={String(community.topics.length)} />
      </dl>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="border-b border-line pb-4 text-2xl font-bold">
            Posts in this community
          </h2>
          {communityPosts.length > 0 ? (
            <div className="mt-6 space-y-4">
              {communityPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              No posts here yet. Join the community and write the first one.
            </p>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Topics covered
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {community.topics.map((topicSlug) => {
                const topic = getTopicBySlug(topicSlug);
                return (
                  <li
                    key={topicSlug}
                    className="rounded-md border border-line px-2.5 py-1.5 font-mono text-[11px] text-ink"
                  >
                    {topic ? topic.name : topicSlug}
                  </li>
                );
              })}
            </ul>
            <Link
              href="/topics"
              className="mt-4 inline-block text-sm font-semibold text-moss underline-offset-4 hover:underline"
            >
              Browse all topics →
            </Link>
          </Card>

          <Card>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              House rules
            </h2>
            <ul className="mt-4 space-y-3">
              {community.guidelines.map((rule) => (
                <li
                  key={rule}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                  {rule}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="border-b border-line pb-4 text-2xl font-bold">
          Members with profiles
        </h2>
        {members.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((developer) => (
              <DeveloperCard key={developer.username} developer={developer} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted">
            Nobody has published a profile in this community yet.
          </p>
        )}
      </section>
    </>
  );
}
