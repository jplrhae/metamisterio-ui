import { Document } from "@/app/lib/definitions";
import React from "react";

interface ArchiveViewerProps {
  document: Document;
}

export default function ArchiveViewer({ document }: ArchiveViewerProps) {
  const getFileExtension = (filePath: string) => {
    return filePath.split(".").pop();
  };

  return (
    <div className="text-black">{getFileExtension(document.filePath)}</div>
  );
}
