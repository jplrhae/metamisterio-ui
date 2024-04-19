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
  const isUserTop3 = topUsers.some((user) => user.name === "Você");

  return (
    <aside className=" lg:w-1/6 bg-light p-4 overflow-auto">
      <h2 className="lg:text-xl font-semibold mb-2 text-secondary-dark">
        Ranking 👑
      </h2>
      <ul className="flex flex-row lg:flex-col gap-2">
        {topUsers.map((entry, index) => (
          <li key={entry.name} className="text-sm lg:text-base text-primary">
            {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} {entry.name}:{" "}
            {entry.points}
          </li>
        ))}
        {!isUserTop3 && (
          <li
            key={currentUser?.name}
            className={
              "text-sm lg:text-base text-primary ml-auto lg:ml-0 font-semibold"
            }
          >
            {currentUser?.name}: {currentUser?.points}
          </li>
        )}
      </ul>
    </aside>
  );
}
