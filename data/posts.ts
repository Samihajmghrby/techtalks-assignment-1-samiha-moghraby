export interface Post {
  id: string;
  authorUsername: string;
  title: string;
  excerpt: string;
  content: string[];
  community: string;
  tags: string[];
  publishedAt: string;
  readingMinutes: number;
  replies: number;
}

export const posts: Post[] = [
  {
    id: "1",
    authorUsername: "samiha",
    title: "Server Components are a default, not a decision you make once",
    excerpt:
      "Every component in the App Router is a Server Component until something forces it to run in the browser. That inversion changes how you plan a page.",
    content: [
      "The mental shift with the App Router is that you no longer opt into server rendering. You opt out of it. Every file under app/ is a Server Component until you write \"use client\" at the top, and that single line pulls the component and everything it imports into the browser bundle.",
      "In practice this means the interesting design question is no longer \"should this be server rendered\" but \"what is the smallest piece of this page that genuinely needs state\". A page listing two hundred developers does not need state. The one button on it that toggles between two labels does.",
      "So the pattern I keep landing on is a Server Component page that reads data directly, and a small leaf Client Component for the interactive bit. The data never crosses the network as JSON, the client bundle stays small, and the interactive part still feels instant because it was hydrated on its own.",
      "The failure mode is putting \"use client\" at the top of a layout to fix one dropdown. Everything below it becomes a Client Component and you have quietly rebuilt a single page app.",
    ],
    community: "web-development",
    tags: ["nextjs", "react", "architecture"],
    publishedAt: "2026-07-18",
    readingMinutes: 6,
    replies: 34,
  },
  {
    id: "2",
    authorUsername: "samiha",
    title: "A route group is a folder that disappears",
    excerpt:
      "Wrapping a folder name in parentheses removes it from the URL but keeps it in your file tree. It is the cheapest organisation tool the App Router gives you.",
    content: [
      "Naming a folder (main) instead of main tells the router to ignore that segment when it builds the URL. app/(main)/about/page.tsx still serves /about. Nothing about the address changes.",
      "What you get in exchange is a place to hang a layout. Every page inside the group shares that layout, and pages outside it do not, which is how you give a marketing home page a full bleed hero while every other page sits inside the same padded container.",
      "The rule that catches people out is that two route groups cannot resolve to the same path. If you have app/(main)/page.tsx and app/(marketing)/page.tsx, both claim / and the build fails.",
    ],
    community: "web-development",
    tags: ["nextjs", "routing"],
    publishedAt: "2026-07-02",
    readingMinutes: 4,
    replies: 21,
  },
  {
    id: "3",
    authorUsername: "samiha",
    title: "Focus states are not decoration",
    excerpt:
      "The outline your designer asked you to remove is the only way some people know where they are on the page.",
    content: [
      "Removing the focus ring is still the most common accessibility regression I find in code review, and it is almost always framed as a visual fix. The outline looked wrong on a rounded button, so it went away globally.",
      "The fix is not to keep the browser default. It is to design a focus state that matches your interface: use :focus-visible so it appears for keyboard users and not on mouse clicks, give it a colour with real contrast against both the element and the page, and offset it so it reads clearly on rounded shapes.",
      "Then tab through the page yourself. If you lose track of where you are, so will everyone else.",
    ],
    community: "ui-ux",
    tags: ["accessibility", "css"],
    publishedAt: "2026-06-11",
    readingMinutes: 3,
    replies: 47,
  },
  {
    id: "4",
    authorUsername: "maya-b",
    title: "Your pipeline is slow because it is doing work twice",
    excerpt:
      "Before adding parallelism, spend an afternoon reading what your CI actually installs on every run.",
    content: [
      "Most build times I have cut in half were not solved by bigger runners. They were solved by noticing that dependencies were reinstalled from scratch in four separate jobs because the cache key included a timestamp.",
      "Start by logging the duration of every step for a week. The distribution is usually lopsided: one or two steps own the runtime and everything else is noise.",
      "Only after the obvious waste is gone does parallelism help, and it brings its own cost in flakiness and debugging difficulty.",
    ],
    community: "devops",
    tags: ["devops", "ci"],
    publishedAt: "2026-07-21",
    readingMinutes: 5,
    replies: 18,
  },
  {
    id: "5",
    authorUsername: "maya-b",
    title: "Write the runbook as a script you can run",
    excerpt:
      "A document nobody has executed since it was written is not a runbook. It is a wish.",
    content: [
      "Prose runbooks rot silently. The service gets renamed, a flag changes, and the document keeps looking correct until the night somebody follows it under pressure.",
      "If each step is a command in a file, the runbook fails loudly in a drill instead of quietly in an incident. Keep the prose around each command explaining why the step exists, because that is the part automation cannot carry.",
    ],
    community: "devops",
    tags: ["devops", "incident-response"],
    publishedAt: "2026-05-30",
    readingMinutes: 4,
    replies: 12,
  },
  {
    id: "6",
    authorUsername: "lina",
    title: "Show the problem before you show the screen",
    excerpt:
      "Design critique goes badly when the first thing the room sees is a finished layout with no context.",
    content: [
      "When you open a critique with a polished screen, people respond to the surface, because that is all you gave them. You get comments about spacing when you needed comments about the flow.",
      "Lead with the user, the task and the constraint instead. Two sentences is enough. Then show the screen and the same room will tell you whether the design solves the thing you just described.",
    ],
    community: "ui-ux",
    tags: ["design", "process"],
    publishedAt: "2026-07-09",
    readingMinutes: 4,
    replies: 29,
  },
  {
    id: "7",
    authorUsername: "lina",
    title: "Tokens are a contract, not a colour list",
    excerpt:
      "A design system fails at the moment engineers start reaching past the tokens for a hex value.",
    content: [
      "Tokens work when they are named for their job rather than their appearance. A token called surface-raised survives a rebrand. A token called grey-100 becomes a lie the first time the palette shifts.",
      "The test is simple: can a developer build a new screen without opening the design file to check a value. If not, the system is documentation rather than a contract.",
    ],
    community: "ui-ux",
    tags: ["design-systems", "css"],
    publishedAt: "2026-04-16",
    readingMinutes: 5,
    replies: 22,
  },
  {
    id: "8",
    authorUsername: "omar-dev",
    title: "Offline is a state, not an error",
    excerpt:
      "Mobile apps that treat lost connectivity as a failure screen are unusable on a commute.",
    content: [
      "The pattern that works is to write to a local store first and reconcile later, so the interface responds immediately and the network becomes an implementation detail the user never sees.",
      "That decision creates real work: conflict resolution, queue ordering, and telling the user honestly when something has not synced yet. Skipping that work is how apps end up silently losing a draft.",
    ],
    community: "mobile-development",
    tags: ["mobile", "offline"],
    publishedAt: "2026-07-25",
    readingMinutes: 6,
    replies: 31,
  },
  {
    id: "9",
    authorUsername: "omar-dev",
    title: "Test on the cheapest phone your users own",
    excerpt:
      "Performance work done on a flagship device optimises for the smallest part of your audience.",
    content: [
      "Pick the slowest device in your analytics, keep it on your desk, and run the app on it before every release. Animations that felt smooth in the simulator will stutter, and list rendering costs you ignored will become obvious.",
      "It is a low effort habit that catches the class of bug no dashboard reports, because the users hitting it usually just stop opening the app.",
    ],
    community: "mobile-development",
    tags: ["mobile", "performance"],
    publishedAt: "2026-06-04",
    readingMinutes: 3,
    replies: 15,
  },
  {
    id: "10",
    authorUsername: "tarek",
    title: "Design the response shape before the endpoint",
    excerpt:
      "Most API pain starts with a payload that mirrors the database instead of the screen.",
    content: [
      "If the response is a direct dump of your tables, every client ends up writing the same joining and reshaping logic, and that logic drifts between platforms.",
      "Sketch what the screen needs first, then work backwards to the query. The endpoint gets slightly harder to write once and considerably easier to consume forever.",
    ],
    community: "web-development",
    tags: ["api", "backend"],
    publishedAt: "2026-07-14",
    readingMinutes: 5,
    replies: 26,
  },
  {
    id: "11",
    authorUsername: "rami",
    title: "Secure defaults beat security training",
    excerpt:
      "If the safe path is also the easy path, most vulnerabilities never get written.",
    content: [
      "Teaching a team to escape output correctly helps for a quarter. Giving them a template engine that escapes by default helps forever, because the insecure version now requires extra effort and a visible function name.",
      "When you review a finding, ask what would have made the mistake impossible rather than unlikely. That question turns a single fix into a class of fixes.",
    ],
    community: "cybersecurity",
    tags: ["appsec", "code-review"],
    publishedAt: "2026-07-27",
    readingMinutes: 4,
    replies: 19,
  },
  {
    id: "12",
    authorUsername: "yara",
    title: "Batch to streaming is a modelling change, not a tooling change",
    excerpt:
      "Swapping the scheduler for a stream processor does not answer what a late arriving row means.",
    content: [
      "Nightly jobs let you pretend the day is a closed set. Streaming removes that comfort: you have to decide how long to wait for late data, what a correction looks like downstream, and whether a dashboard is allowed to change after someone screenshots it.",
      "Answer those questions on paper first. The tooling choice is the easy part and it comes last.",
    ],
    community: "data-engineering",
    tags: ["data", "streaming"],
    publishedAt: "2026-07-29",
    readingMinutes: 6,
    replies: 11,
  },
  {
    id: "13",
    authorUsername: "noor",
    title: "Six months in, here is what actually made me faster",
    excerpt:
      "Not tutorials. Reading the codebase I was already working in, one file at a time.",
    content: [
      "For the first three months I answered every unfamiliar thing with another tutorial. It felt productive and changed almost nothing, because the gap was never general knowledge. It was this codebase.",
      "What worked was picking one file a day that I did not understand and reading it until I could explain what it did to someone else. Within a month the review comments I got shifted from how things work to what we should build.",
      "The other change was asking questions with my attempt attached. Same question, far better answers, and it stopped feeling like interrupting people.",
    ],
    community: "web-development",
    tags: ["career", "learning"],
    publishedAt: "2026-07-30",
    readingMinutes: 4,
    replies: 58,
  },
];

export function getPostsByAuthor(username: string): Post[] {
  return posts
    .filter((post) => post.authorUsername === username)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

/**
 * A post is only valid at /developers/[username]/posts/[postId] when the post
 * exists AND belongs to that author, so both dynamic params are used.
 */
export function getPostByAuthorAndId(
  username: string,
  postId: string
): Post | undefined {
  return posts.find(
    (post) => post.authorUsername === username && post.id === postId
  );
}

export function getPostsByCommunity(slug: string): Post[] {
  return posts
    .filter((post) => post.community === slug)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getLatestPosts(limit = 3): Post[] {
  return [...posts]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, limit);
}
