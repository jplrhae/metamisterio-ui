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
    <aside className="w-64 h-screen bg-primary p-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Ranking 👑</h2>
      <ul>
        {session.users.map((entry) => (
          <li key={entry.name} className="mb-2 p-2 hover:bg-gray-300">
            {entry.name}: {entry.points}
          </li>
        ))}
      </ul>
    </aside>
  );
}
