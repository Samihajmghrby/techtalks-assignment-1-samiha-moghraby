export interface Community {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  members: number;
  postsThisWeek: number;
  createdAt: string;
  topics: string[];
  guidelines: string[];
}

export const communities: Community[] = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Ship for the browser.",
    description:
      "A community for developers interested in modern web development, from rendering strategies to shipping accessible interfaces.",
    category: "Engineering",
    members: 18420,
    postsThisWeek: 214,
    createdAt: "2019-02-11",
    topics: ["javascript", "react", "nextjs", "typescript"],
    guidelines: [
      "Post a reproducible example when you ask for debugging help.",
      "Link the docs you already read so nobody repeats your work.",
      "Framework preferences are fine. Framework fights are not.",
    ],
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    tagline: "Small screens, hard constraints.",
    description:
      "Native and cross-platform mobile engineers comparing notes on release cycles, offline behaviour and device fragmentation.",
    category: "Engineering",
    members: 9715,
    postsThisWeek: 96,
    createdAt: "2019-08-03",
    topics: ["react", "typescript", "testing"],
    guidelines: [
      "Say which platform and OS version you are on before reporting a bug.",
      "Screenshots beat descriptions for layout problems.",
      "Store review horror stories belong in the weekly thread.",
    ],
  },
  {
    slug: "ui-ux",
    name: "UI/UX",
    tagline: "Design that survives contact with users.",
    description:
      "Designers and design engineers working on interface craft, design systems, usability testing and accessibility.",
    category: "Design",
    members: 12060,
    postsThisWeek: 143,
    createdAt: "2020-01-27",
    topics: ["accessibility", "react", "javascript"],
    guidelines: [
      "Critique the work, never the person who posted it.",
      "Include the problem the design is solving, not only the final screen.",
      "Accessibility notes are welcome on every critique.",
    ],
  },
  {
    slug: "devops",
    name: "DevOps & Platform",
    tagline: "Make the pipeline boring.",
    description:
      "Build engineers, SREs and platform teams talking about CI, observability, infrastructure as code and incident practice.",
    category: "Infrastructure",
    members: 8340,
    postsThisWeek: 87,
    createdAt: "2020-06-15",
    topics: ["devops", "python", "testing"],
    guidelines: [
      "Redact hostnames, keys and internal URLs from every log you paste.",
      "Postmortems are welcome. Blame is not.",
      "Say which cloud and which region before asking about pricing.",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Assume it is already broken.",
    description:
      "Application security, threat modelling and secure defaults, for engineers who would rather find the hole than read about it.",
    category: "Security",
    members: 6905,
    postsThisWeek: 64,
    createdAt: "2021-03-09",
    topics: ["cybersecurity", "python", "devops"],
    guidelines: [
      "Report vulnerabilities to the vendor before you post them here.",
      "No live exploit code against systems you do not own.",
      "Explain the fix, not just the finding.",
    ],
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    tagline: "Pipelines that hold under load.",
    description:
      "Warehouses, streaming, modelling and the unglamorous work of keeping data correct on the way from source to dashboard.",
    category: "Data",
    members: 5480,
    postsThisWeek: 51,
    createdAt: "2021-10-22",
    topics: ["python", "databases", "devops"],
    guidelines: [
      "Share the schema, not the customer data.",
      "Row counts and runtimes make performance questions answerable.",
      "Say whether it is batch or streaming up front.",
    ],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug);
}

export function getCommunitySlugs(): string[] {
  return communities.map((community) => community.slug);
}
