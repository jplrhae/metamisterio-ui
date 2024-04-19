"use client";
import React from "react";

import { Document } from "@/app/lib/definitions";
import Button from "./Button";

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

  const renderFile = () => {
    switch (getFileExtension(document.filePath)) {
      case "pdf":
        return (
          <Button
            label="View PDF"
            color="primary"
            onClick={() => {
              window.open(document.filePath, "_blank");
            }}
          />
        );
      case "mp3":
        return (
          <div className="flex h-3/4 border-2 items-center justify-center">
            <p>Text</p>
          </div>
        );
      case "mp4":
        return (
          <div className="flex h-3/4 border-2 items-center justify-center">
            <p>Image</p>
          </div>
        );
      default:
        return (
          <div className="flex h-3/4 border-2 items-center justify-center">
            <p>Unsupported file type</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-3/4 border-2 items-center justify-center">
      {renderFile()}
    </div>
  );
}
