import Link from "next/link";
import CommunityCard from "@/components/CommunityCard";
import DeveloperCard from "@/components/DeveloperCard";
import PostCard from "@/components/PostCard";
import { communities } from "@/data/communities";
import { developers, getTopRatedDevelopers } from "@/data/developers";
import { getLatestPosts, posts } from "@/data/posts";
import { topics } from "@/data/topics";
import { formatCount } from "@/lib/format";

/**
 * Home page — a Server Component. It reads the static data directly at render
 * time; none of this data is shipped to the browser as JSON.
 */
export default function HomePage() {
  const featured = communities.slice(0, 3);
  const spotlight = getTopRatedDevelopers().slice(0, 3);
  const latest = getLatestPosts(2);

  const totalMembers = communities.reduce(
    (sum, community) => sum + community.members,
    0
  );

  return (
    <>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-[2px] bg-moss"
            />
            <span className="font-mono text-xs tracking-tight text-moss">
              /
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-6xl">
            Find the room where your problem
            <br className="hidden sm:block" /> has already been solved.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            TechTalks is a community platform for developers. Join a community,
            follow the topics you work in, and read what other people shipped
            this week.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/communities"
              className="rounded-lg bg-moss px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-moss-deep"
            >
              Browse communities
            </Link>
            <Link
              href="/developers"
              className="rounded-lg border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Meet the developers
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Members", value: formatCount(totalMembers) },
              { label: "Communities", value: String(communities.length) },
              { label: "Topics", value: String(topics.length) },
              { label: "Posts", value: String(posts.length) },
            ].map((item) => (
              <div key={item.label} className="border-l border-line pl-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 font-mono text-2xl text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section>
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <h2 className="text-2xl font-bold">Featured communities</h2>
              <p className="mt-1 text-sm text-muted">
                Three of the busiest rooms on the platform right now.
              </p>
            </div>
            <Link
              href="/communities"
              className="shrink-0 text-sm font-semibold text-moss underline-offset-4 hover:underline"
            >
              All communities →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <h2 className="text-2xl font-bold">Topics in rotation</h2>
              <p className="mt-1 text-sm text-muted">
                What people are actually posting about.
              </p>
            </div>
            <Link
              href="/topics"
              className="shrink-0 text-sm font-semibold text-moss underline-offset-4 hover:underline"
            >
              All topics →
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li
                key={topic.slug}
                className="rounded-lg border border-line bg-card px-3 py-2 font-mono text-xs text-ink"
              >
                {topic.name}
                <span className="ml-2 text-muted">{topic.threads}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="border-b border-line pb-4">
              <h2 className="text-2xl font-bold">Latest posts</h2>
              <p className="mt-1 text-sm text-muted">
                Published by members this week.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {latest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div>
            <div className="border-b border-line pb-4">
              <h2 className="text-2xl font-bold">Member spotlight</h2>
              <p className="mt-1 text-sm text-muted">
                {developers.length} developers have profiles.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {spotlight.slice(0, 2).map((developer) => (
                <DeveloperCard
                  key={developer.username}
                  developer={developer}
                  highlight="rating"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
