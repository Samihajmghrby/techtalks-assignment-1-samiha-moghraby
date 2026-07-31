# TechTalks — Developer Community Platform

TechTalks Full-Stack Bootcamp, Assignment 1. Next.js 16, App Router, TypeScript,
Tailwind CSS. No database, no authentication, all data local and static.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Routes

| URL                                     | File                                                       |
| --------------------------------------- | ---------------------------------------------------------- |
| `/`                                     | `app/page.tsx`                                             |
| `/about`                                | `app/(main)/about/page.tsx`                                |
| `/communities`                          | `app/(main)/communities/page.tsx`                          |
| `/communities/[slug]`                   | `app/(main)/communities/[slug]/page.tsx`                   |
| `/topics`                               | `app/(main)/topics/page.tsx`                               |
| `/developers`                           | `app/(main)/developers/page.tsx`                           |
| `/developers/top-rated`                 | `app/(main)/developers/top-rated/page.tsx`                 |
| `/developers/new-members`               | `app/(main)/developers/new-members/page.tsx`               |
| `/developers/[username]`                | `app/(main)/developers/[username]/page.tsx`                |
| `/developers/[username]/posts/[postId]` | `app/(main)/developers/[username]/posts/[postId]/page.tsx` |

Real URLs to try:

```
/communities/web-development
/communities/mobile-development
/communities/ui-ux
/developers/samiha
/developers/samiha/posts/1
/developers/maya-b/posts/4
```

404 behaviour: `/communities/nope`, `/developers/nobody`, and
`/developers/omar-dev/posts/1` (post 1 exists but belongs to `samiha`).

## Three decisions worth explaining

**Community pages come from the dynamic route, not hardcoded folders.**
Requirement 9 asks for `/communities/web-development`, `/communities/mobile-development`
and `/communities/ui-ux`; requirement 10 forbids hardcoded pages per community.
Creating both would also shadow the dynamic route, since a static segment always
wins over `[slug]`. So `app/(main)/communities/[slug]/page.tsx` serves all of
them, and `generateStaticParams()` pre-renders one static page per community at
build time. The three URLs work and there is exactly one dynamic route.

**The home page sits at `app/page.tsx`, outside the `(main)` group.**
`app/page.tsx` and `app/(main)/page.tsx` would both claim `/` and fail the build.
Home stays outside so its hero can run full width, while `(main)/layout.tsx`
gives every other page the same padded max-width column.

**`components/` and `data/` are at the project root**, imported through the `@/`
alias, rather than inside `app/`.

## Server and Client Components

Every page is a Server Component. Only two files carry `"use client"`:

- `components/JoinButton.tsx` — `useState` toggles between "Join community" and
  "Joined ✓" and updates the member count line.
- `components/Navbar.tsx` — reads `usePathname()` for active-link styling and
  holds the mobile menu open/closed state.

`app/(main)/developers/page.tsx` is the clearest Server Component example: it
imports `data/developers.ts` directly and renders on the server, so the data
never crosses the network as JSON.

## Data

`data/communities.ts`, `data/developers.ts`, `data/posts.ts`, `data/topics.ts`.
Each exports a TypeScript interface, the array, and the lookup helpers pages use
(`getCommunityBySlug`, `getPostByAuthorAndId`, `getTopRatedDevelopers`, …).
No entity data is declared inside a page component.

## Requirement checklist

- [x] Next.js 16, App Router, TypeScript, Tailwind CSS
- [x] `/`, `/about`, `/communities`, `/topics`, `/developers` — each with a title and description
- [x] Shared Navbar with working `next/link` navigation
- [x] Shared Footer
- [x] Shared layout (`app/layout.tsx`) holding Navbar + content + Footer
- [x] Route group `(main)`, absent from every URL
- [x] Communities list with Web Development, Mobile Development, UI/UX (plus 3 more)
- [x] `/communities/web-development`, `/communities/mobile-development`, `/communities/ui-ux`
- [x] Dynamic `/communities/[slug]` reading the slug from params
- [x] Interactive Join button as a reusable Client Component
- [x] Topics page
- [x] Developers page with local developer data
- [x] `/developers/top-rated` and `/developers/new-members`
- [x] Dynamic `/developers/[username]` showing username, title and bio
- [x] Nested dynamic `/developers/[username]/posts/[postId]` using both params
- [x] Separate static data files
- [x] Server Component rendering static data
- [x] Client Component with real interactivity
- [x] `notFound()` plus global and route-level `not-found.tsx`
- [x] Loading UI, active link styling, reusable card components
- [x] Responsive layout, keyboard focus states, reduced-motion support
- [x] No database, no authentication, no external APIs, no Pages Router

## Assignment 1 Verification

This project was built for TechTalks Full-Stack Bootcamp Assignment 1.

### Verification

```bash
npm install
npm run dev
npm run build
npm run typecheck
```
