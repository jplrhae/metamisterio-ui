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
    <aside className=" md:w-1/6 text-white bg-backdrop p-4 overflow-auto">
      <h2 className="md:text-xl font-semibold mb-2">Ranking 👑</h2>
      <ul className="flex flex-row md:flex-col gap-2">
        {session.users.map((entry) => (
          <li key={entry.name} className="text-sm md:text-base">
            {entry.name}: {entry.points}
          </li>
        ))}
      </ul>
    </aside>
  );
}
