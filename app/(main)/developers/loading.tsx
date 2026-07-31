/** Loading UI for the developers segment. */
export default function LoadingDevelopers() {
  return (
    <div className="animate-pulse py-4" aria-hidden="true">
      <div className="h-3 w-40 rounded bg-line" />
      <div className="mt-6 h-9 w-56 rounded bg-line" />
      <div className="mt-4 h-4 w-full max-w-xl rounded bg-line" />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-64 rounded-xl border border-line bg-card" />
        ))}
      </div>
    </div>
  );
}
