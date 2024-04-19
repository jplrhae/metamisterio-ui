import Image from "next/image";
import RankingSidebar from "./ui/RankingSidebar";

export default function Home() {
  return (
    <div className="flex flex-row w-full">
      <RankingSidebar
        session={{
          users: [
            { name: "Alice", points: 100 },
            { name: "Bob", points: 50 },
            { name: "Charlie", points: 25 },
          ],
          documentId: "123",
          playerLimit: 4,
        }}
      />
      <div className="flex-1 flex flex-col">
        <div>Viewer</div>
        <div>Data</div>
      </div>
    </div>
  );
}
