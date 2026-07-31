import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DeveloperTabs from "@/components/DeveloperTabs";
import DeveloperCard from "@/components/DeveloperCard";
import { getTopRatedDevelopers } from "@/data/developers";

export const metadata: Metadata = {
  title: "Top rated developers",
  description: "Members with the highest community ratings on TechTalks.",
};

/**
 * Nested route under /developers. A static segment like "top-rated" always
 * wins over the sibling [username] dynamic segment, so this page is what you
 * get at /developers/top-rated.
 */
export default function TopRatedPage() {
  const topRated = getTopRatedDevelopers();

  return (
    <>
      <PageHeader
        urlPath="/developers/top-rated"
        filePath="app/(main)/developers/top-rated/page.tsx"
        title="Top rated"
        description="Members rated 4.6 and above by the people they have helped, sorted from highest to lowest."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Developers", href: "/developers" },
          { label: "Top rated", href: "/developers/top-rated" },
        ]}
      />

      <DeveloperTabs active="/developers/top-rated" />

      <section className="mt-8">
        <h2 className="sr-only">Top rated developers</h2>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topRated.map((developer) => (
            <li key={developer.username}>
              <DeveloperCard developer={developer} highlight="rating" />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
