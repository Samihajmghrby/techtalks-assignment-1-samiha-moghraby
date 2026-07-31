import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DeveloperTabs from "@/components/DeveloperTabs";
import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";

export const metadata: Metadata = {
  title: "Developers",
  description: "Every developer with a profile on TechTalks.",
};

/**
 * SERVER COMPONENT.
 *
 * There is no "use client" here, so this file never reaches the browser. It
 * imports data/developers.ts directly and renders the HTML on the server.
 * The only JavaScript this page ships is the Navbar, which needs the router.
 */
export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        urlPath="/developers"
        filePath="app/(main)/developers/page.tsx"
        title="Developers"
        description="Everyone with a public profile, what they work on and where to find their posts. Open a profile to read what they have written."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Developers", href: "/developers" },
        ]}
      />

      <DeveloperTabs active="/developers" />

      <section className="mt-8">
        <h2 className="sr-only">All developers</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((developer) => (
            <DeveloperCard key={developer.username} developer={developer} />
          ))}
        </div>
      </section>

      <p className="mt-10 font-mono text-xs text-muted">
        {developers.length} profiles, all served by the dynamic route
        /developers/[username].
      </p>
    </>
  );
}
