import { Session, UserSessionData } from "@/app/lib/definitions";
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
  const topUsers: UserSessionData[] = session.users
    .sort((a, b) => b.points - a.points)
    .slice(0, 3);
  const currentUser = session.users.find((user) => user.name === "Você");

  return (
    <aside className=" md:w-1/6 bg-light p-4 overflow-auto">
      <h2 className="md:text-xl font-semibold mb-2 text-secondary-dark">
        Ranking 👑
      </h2>
      <ul className="flex flex-row md:flex-col gap-2">
        {topUsers.map((entry, index) => (
          <li key={entry.name} className="text-sm md:text-base text-primary">
            {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} {entry.name}:{" "}
            {entry.points}
          </li>
        ))}
        <li
          key={currentUser?.name}
          className="text-sm md:text-base text-primary ml-auto font-semibold"
        >
          {currentUser?.name}: {currentUser?.points}
        </li>
      </ul>
    </aside>
  );
}
