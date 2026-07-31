import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CommunityCard from "@/components/CommunityCard";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Communities",
  description: "Browse every developer community on TechTalks.",
};

/** Server Component: imports static data and renders it on the server. */
export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        urlPath="/communities"
        filePath="app/(main)/communities/page.tsx"
        title="Communities"
        description="Every room on the platform, with the topics it covers and how many people are in it. Open one to read its guidelines and join."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Communities", href: "/communities" },
        ]}
      />

      <section className="mt-10">
        <h2 className="sr-only">All communities</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </section>

      <p className="mt-10 font-mono text-xs text-muted">
        Each card links to /communities/[slug] — one dynamic route serving all{" "}
        {communities.length} communities.
      </p>
    </>
  );
}
