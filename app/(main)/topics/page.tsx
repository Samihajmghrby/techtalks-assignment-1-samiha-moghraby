import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getCommunityBySlug } from "@/data/communities";
import { topics } from "@/data/topics";

export const metadata: Metadata = {
  title: "Topics",
  description: "Developer topics people are posting about on TechTalks.",
};

/** Server Component rendering static topic data. */
export default function TopicsPage() {
  const kinds = ["Language", "Framework", "Practice", "Platform"] as const;

  return (
    <>
      <PageHeader
        urlPath="/topics"
        filePath="app/(main)/topics/page.tsx"
        title="Topics"
        description="The subjects threads get filed under. Each topic points at the community where most of that discussion happens."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Topics", href: "/topics" },
        ]}
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {kinds.map((kind) => (
          <span
            key={kind}
            className="rounded-md border border-line bg-card px-2.5 py-1.5 font-mono text-[11px] text-muted"
          >
            {kind} · {topics.filter((topic) => topic.kind === kind).length}
          </span>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="sr-only">All topics</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const community = getCommunityBySlug(topic.community);
            return (
              <li
                key={topic.slug}
                className="flex h-full flex-col rounded-xl border border-line bg-card p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{topic.name}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-muted">
                    {topic.kind}
                  </span>
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {topic.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[11px] text-ink">
                    {topic.threads} threads
                  </span>
                  {community && (
                    <Link
                      href={`/communities/${community.slug}`}
                      className="font-mono text-[11px] text-moss underline-offset-4 hover:underline"
                    >
                      {community.name} →
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
