import Image from "next/image";
import RankingSidebar from "./ui/RankingSidebar";
import ArchiveViewer from "./ui/ArchiveViewer";
import DataSection from "./ui/DataSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
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
        <ArchiveViewer
          document={{
            id: "123",
            filePath: "BR_RJANRIO_TN_CPR_PTE_3972_d0001de0001 (7).pdf",
          }}
        />
        <DataSection />
      </div>
    </div>
  );
}
