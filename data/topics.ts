export interface Topic {
  slug: string;
  name: string;
  description: string;
  kind: "Language" | "Framework" | "Practice" | "Platform";
  threads: number;
  community: string;
}

export const topics: Topic[] = [
  {
    slug: "javascript",
    name: "JavaScript",
    description: "The language the browser actually runs, and everything built on top of it.",
    kind: "Language",
    threads: 1284,
    community: "web-development",
  },
  {
    slug: "react",
    name: "React",
    description: "Components, hooks, rendering behaviour and the patterns teams settle on.",
    kind: "Framework",
    threads: 1130,
    community: "web-development",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    description: "App Router, layouts, routing conventions and rendering on the server.",
    kind: "Framework",
    threads: 942,
    community: "web-development",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description: "Types that describe real code, and the escape hatches worth using.",
    kind: "Language",
    threads: 876,
    community: "web-development",
  },
  {
    slug: "python",
    name: "Python",
    description: "Scripting, data work and services, from quick tools to production jobs.",
    kind: "Language",
    threads: 803,
    community: "data-engineering",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description: "Threat modelling, secure defaults and reviewing code like an attacker.",
    kind: "Practice",
    threads: 512,
    community: "cybersecurity",
  },
  {
    slug: "devops",
    name: "DevOps",
    description: "Pipelines, deploys, observability and the practice of keeping things up.",
    kind: "Practice",
    threads: 690,
    community: "devops",
  },
  {
    slug: "databases",
    name: "Databases",
    description: "Schema design, indexes, migrations and queries that stay fast under load.",
    kind: "Platform",
    threads: 458,
    community: "data-engineering",
  },
  {
    slug: "accessibility",
    name: "Accessibility",
    description: "Interfaces that work with a keyboard, a screen reader and a bad connection.",
    kind: "Practice",
    threads: 397,
    community: "ui-ux",
  },
  {
    slug: "testing",
    name: "Testing",
    description: "Unit, integration and end to end, plus how much of each is enough.",
    kind: "Practice",
    threads: 341,
    community: "web-development",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
