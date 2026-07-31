import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "About",
  description: "What TechTalks is for and how the platform is organised.",
};

const principles = [
  {
    heading: "Communities, not feeds",
    body: "You pick the rooms you want to be in. Nothing is pushed at you because it performed well somewhere else.",
  },
  {
    heading: "Answers stay findable",
    body: "Every post lives under its author and keeps a stable address, so a link you share today still resolves next year.",
  },
  {
    heading: "Beginners post here too",
    body: "Questions with an attempt attached get answered. Nobody gets told to read the manual and nothing else.",
  },
];

/** Server Component: static content, no client-side JavaScript. */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        urlPath="/about"
        filePath="app/(main)/about/page.tsx"
        title="About TechTalks"
        description="A developer community platform built around communities, topics and the people posting in them."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            TechTalks exists because the useful part of developer conversation
            keeps getting buried. Someone solves a hard problem, writes it up
            well, and the write-up disappears into a timeline within a day.
          </p>
          <p>
            So the platform is organised around three stable things instead of a
            feed: the{" "}
            <Link
              href="/communities"
              className="font-semibold text-moss underline-offset-4 hover:underline"
            >
              community
            </Link>{" "}
            a post belongs to, the{" "}
            <Link
              href="/topics"
              className="font-semibold text-moss underline-offset-4 hover:underline"
            >
              topic
            </Link>{" "}
            it covers, and the{" "}
            <Link
              href="/developers"
              className="font-semibold text-moss underline-offset-4 hover:underline"
            >
              developer
            </Link>{" "}
            who wrote it. Each of those has its own address, which means you can
            link to any of them directly.
          </p>
          <p>
            This build is the frontend foundation: the routing structure, the
            shared layout and the component split between server and client
            rendering. Data is local and static, and there is no database or
            sign-in yet.
          </p>
        </div>

        <Card className="h-fit">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            How the app is built
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {[
              ["Framework", "Next.js 16, App Router"],
              ["Language", "TypeScript"],
              ["Styling", "Tailwind CSS"],
              ["Data", "Local static files"],
              ["Database", "None"],
              ["Authentication", "None"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                  {label}
                </span>
                <span className="text-right font-semibold text-ink">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="border-b border-line pb-4 text-2xl font-bold">
          What we optimise for
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.heading}>
              <h3 className="text-lg font-bold">{principle.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.body}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
