"use client";
import React from "react";

import { Document } from "@/app/lib/definitions";

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
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const getFileExtension = (filePath: string) => {
    return filePath.split(".").pop();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return <div className="bg-slate-400">View PDF</div>;
}
