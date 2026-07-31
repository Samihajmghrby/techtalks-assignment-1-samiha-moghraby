"use client";

import { useState } from "react";
import { formatCount } from "@/lib/format";

/**
 * Client Component with real interactivity.
 *
 * Clicking toggles React state, which changes the label from
 * "Join community" to "Joined ✓" and updates the visible member count.
 * Nothing is persisted: there is no database in this assignment.
 */
export default function JoinButton({
  communityName,
  members,
}: {
  communityName: string;
  members: number;
}) {
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => setHasJoined((joined) => !joined)}
        aria-pressed={hasJoined}
        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
          hasJoined
            ? "border border-moss bg-mint text-moss-deep hover:bg-card"
            : "bg-moss text-white hover:bg-moss-deep"
        }`}
      >
        {hasJoined ? "Joined ✓" : "Join community"}
      </button>

      <p className="font-mono text-xs text-muted" aria-live="polite">
        {hasJoined
          ? `You and ${formatCount(members)} others are in ${communityName}`
          : `${formatCount(members)} members`}
      </p>
    </div>
  );
}
