import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DeveloperTabs from "@/components/DeveloperTabs";
import DeveloperCard from "@/components/DeveloperCard";
import { getNewMembers } from "@/data/developers";

export const metadata: Metadata = {
  title: "New members",
  description: "Developers who joined TechTalks most recently.",
};

/** Nested route under /developers, sibling of top-rated and [username]. */
export default function NewMembersPage() {
  const newMembers = getNewMembers();

  return (
    <>
      <PageHeader
        urlPath="/developers/new-members"
        filePath="app/(main)/developers/new-members/page.tsx"
        title="New members"
        description="The most recent people to create a profile. Say hello, and answer their first question if you can."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Developers", href: "/developers" },
          { label: "New members", href: "/developers/new-members" },
        ]}
      />

      <DeveloperTabs active="/developers/new-members" />

      <section className="mt-8">
        <h2 className="sr-only">New members</h2>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {newMembers.map((developer) => (
            <li key={developer.username}>
              <DeveloperCard developer={developer} highlight="joined" />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
