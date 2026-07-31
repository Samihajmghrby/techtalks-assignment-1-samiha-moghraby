export interface Developer {
  username: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  skills: string[];
  rating: number;
  joinedAt: string;
  postCount: number;
  communities: string[];
}

export const developers: Developer[] = [
  {
    username: "samiha",
    name: "Samiha Karam",
    title: "Senior Frontend Engineer",
    bio: "Builds design systems that other teams actually want to use. Currently deep in App Router rendering behaviour and keyboard accessibility.",
    avatar: "SK",
    location: "Beirut, Lebanon",
    skills: ["TypeScript", "React", "Next.js", "Accessibility", "CSS"],
    rating: 4.9,
    joinedAt: "2021-03-14",
    postCount: 3,
    communities: ["web-development", "ui-ux"],
  },
  {
    username: "maya-b",
    name: "Maya Bitar",
    title: "Platform Engineer",
    bio: "Spends her week making builds shorter and incidents rarer. Believes every runbook should be executable.",
    avatar: "MB",
    location: "Amman, Jordan",
    skills: ["Terraform", "Kubernetes", "Go", "Observability"],
    rating: 4.9,
    joinedAt: "2019-06-23",
    postCount: 2,
    communities: ["devops", "cybersecurity"],
  },
  {
    username: "lina",
    name: "Lina Fares",
    title: "Design Engineer",
    bio: "Sits between design and frontend and refuses to pick a side. Runs usability sessions with real users every sprint.",
    avatar: "LF",
    location: "Tunis, Tunisia",
    skills: ["Figma", "React", "Design Systems", "Motion"],
    rating: 4.8,
    joinedAt: "2020-11-05",
    postCount: 2,
    communities: ["ui-ux", "web-development"],
  },
  {
    username: "omar-dev",
    name: "Omar Haddad",
    title: "Mobile Engineer",
    bio: "Ships iOS and Android from one codebase and keeps a long list of the places where that stops being true.",
    avatar: "OH",
    location: "Cairo, Egypt",
    skills: ["React Native", "Swift", "Kotlin", "Offline Sync"],
    rating: 4.7,
    joinedAt: "2022-07-02",
    postCount: 2,
    communities: ["mobile-development"],
  },
  {
    username: "tarek",
    name: "Tarek Sleiman",
    title: "Backend Engineer",
    bio: "Writes APIs that outlive the frontends calling them. Interested in schema design and cache invalidation, in that order.",
    avatar: "TS",
    location: "Tripoli, Lebanon",
    skills: ["Node.js", "PostgreSQL", "GraphQL", "Caching"],
    rating: 4.6,
    joinedAt: "2022-09-30",
    postCount: 1,
    communities: ["web-development", "data-engineering"],
  },
  {
    username: "rami",
    name: "Rami Chehab",
    title: "Application Security Engineer",
    bio: "Reviews other people's code for a living and still enjoys it. Joined to write more about secure defaults.",
    avatar: "RC",
    location: "Dubai, UAE",
    skills: ["Threat Modelling", "Python", "AppSec", "Code Review"],
    rating: 4.5,
    joinedAt: "2026-06-28",
    postCount: 1,
    communities: ["cybersecurity", "devops"],
  },
  {
    username: "yara",
    name: "Yara Nassif",
    title: "Data Engineer",
    bio: "Moves data from places it is stuck to places it is useful. Currently rebuilding a batch pipeline as a streaming one.",
    avatar: "YN",
    location: "Byblos, Lebanon",
    skills: ["Python", "dbt", "Airflow", "SQL"],
    rating: 4.4,
    joinedAt: "2026-07-10",
    postCount: 1,
    communities: ["data-engineering"],
  },
  {
    username: "noor",
    name: "Noor Ayoub",
    title: "Junior Frontend Developer",
    bio: "Six months into her first developer role. Learning in public and posting the questions everyone else is too embarrassed to ask.",
    avatar: "NA",
    location: "Baalbek, Lebanon",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    rating: 4.2,
    joinedAt: "2026-05-12",
    postCount: 1,
    communities: ["web-development", "ui-ux"],
  },
];

export function getDeveloperByUsername(username: string): Developer | undefined {
  return developers.find((developer) => developer.username === username);
}

export function getDeveloperUsernames(): string[] {
  return developers.map((developer) => developer.username);
}

/** Highest rated members first. Used by /developers/top-rated. */
export function getTopRatedDevelopers(minimumRating = 4.6): Developer[] {
  return developers
    .filter((developer) => developer.rating >= minimumRating)
    .sort((a, b) => b.rating - a.rating);
}

/**
 * Members who joined within a year of NEW_MEMBER_CUTOFF, most recent first.
 * The cutoff is a fixed date rather than Date.now() so the list stays the same
 * on every render and this page can be statically generated.
 */
const NEW_MEMBER_CUTOFF = "2025-08-01";

export function getNewMembers(): Developer[] {
  const cutoff = Date.parse(NEW_MEMBER_CUTOFF);
  return developers
    .filter((developer) => Date.parse(developer.joinedAt) >= cutoff)
    .sort((a, b) => Date.parse(b.joinedAt) - Date.parse(a.joinedAt));
}

export function getDevelopersByCommunity(slug: string): Developer[] {
  return developers.filter((developer) => developer.communities.includes(slug));
}
