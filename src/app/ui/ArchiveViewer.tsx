"use client";
import React, { useEffect } from "react";

import ReactAudioPlayer from "react-audio-player";
import { Document as ArchiveDocument } from "../lib/definitions";
import PDFRenderer from "./PDFRenderer";

interface ArchiveViewerProps {
  /**
   * The document to display in the archive viewer
   */
  archiveDocument: ArchiveDocument;
}

/**
 * A component that displays the document
 */
export default function ArchiveViewer({ archiveDocument }: ArchiveViewerProps) {
  const getFileExtension = (filePath: string) => {
    return filePath.split(".").pop();
  };

  const renderFile = () => {
    switch (getFileExtension(archiveDocument.filePath)) {
      case "pdf":
        return <PDFRenderer filePath={archiveDocument.filePath} />;
      case "mp3":
        return (
          <div className="mx-2">
            <ReactAudioPlayer
              src={archiveDocument.filePath}
              autoPlay
              controls
            />
          </div>
        );
      case "mp4":
        return (
          <div className="mx-2">
            <video src={archiveDocument.filePath} controls />
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
    <div className="flex h-3/4 w-full bg-off-white text-secondary-dark">
      {renderFile()}
    </div>
  );
}
