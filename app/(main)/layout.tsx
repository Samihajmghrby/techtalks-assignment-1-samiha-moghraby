/**
 * Layout for the (main) route group.
 *
 * "(main)" is wrapped in parentheses, so it organises files without ever
 * appearing in a URL: app/(main)/about/page.tsx serves /about.
 *
 * Its job is to give every inner page the same padded, max-width column.
 * The home page sits outside this group precisely because its hero needs to
 * run the full width of the viewport.
 */
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {children}
    </main>
  );
}
