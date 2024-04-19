import RankingSidebar from "./ui/RankingSidebar";
import ArchiveViewer from "./ui/ArchiveViewer";
import DataSection from "./ui/DataSection";
import { Document, Session } from "./lib/definitions";

const mockedSession: Session = {
  users: [
    { name: "Alice", points: 100 },
    { name: "Bob", points: 50 },
    { name: "Charlie", points: 25 },
    { name: "Você", points: 10 },
  ],
  documentId: "123",
  playerLimit: 4,
};

const mockedDocument: Document = {
  id: "123",
  filePath: "BR_RJANRIO_TN_CPR_PTE_3972_d0001de0001 (7).pdf",
};

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <RankingSidebar session={mockedSession} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ArchiveViewer archiveDocument={mockedDocument} />
        <DataSection />
      </div>
    </div>
  );
}
