import { Document } from "@/app/lib/definitions";
import React from "react";

interface ArchiveViewerProps {
  /**
   * The document to display in the archive viewer
   */
  document: Document;
}

/**
 * A component that displays the document
 */
export default function ArchiveViewer({ document }: ArchiveViewerProps) {
  const getFileExtension = (filePath: string) => {
    return filePath.split(".").pop();
  };

  return (
    <div className="text-black">{getFileExtension(document.filePath)}</div>
  );
}
