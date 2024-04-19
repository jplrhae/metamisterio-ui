import { Session } from "@/app/lib/definitions";
import React from "react";

interface RankingSidebarProps {
  /**
   * The session data to display in the sidebar
   */
  session: Session;
}

/**
 * A sidebar component that displays the current ranking of users in the session
 */
export default function RankingSidebar({ session }: RankingSidebarProps) {
  return (
    <aside className="w-36 md:w-1/6 text-white bg-primary p-4 overflow-auto">
      <h2 className="md:text-xl font-semibold mb-4">Ranking 👑</h2>
      <ul>
        {session.users.map((entry) => (
          <li key={entry.name} className="text-sm md:text-base mb-2">
            {entry.name}: {entry.points}
          </li>
        ))}
      </ul>
    </aside>
  );
}
