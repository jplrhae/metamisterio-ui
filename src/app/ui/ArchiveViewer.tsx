"use client";
import React from "react";

import { Document as PDFDocument, Page } from "react-pdf";
import ReactAudioPlayer from "react-audio-player";
import { Document } from "../lib/definitions";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PDFLoadingSkeleton from "./PDFLoadingSkeleton";

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
          <div className="flex flex-row items-center justify-center gap-2 w-full">
            <FaChevronCircleLeft
              color="#35424a"
              cursor={"pointer"}
              size={20}
              onClick={() =>
                setPageNumber((prev) => {
                  if (prev === 1) return numPages as number;
                  return prev - 1;
                })
              }
            />
            <div>
              <PDFDocument
                file={document.filePath}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<PDFLoadingSkeleton />}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={0.4}
                  loading={<PDFLoadingSkeleton />}
                />
              </PDFDocument>
              <p className="text-primary text-sm">
                Page <span className="font-bold">{pageNumber}</span> of{" "}
                <span className="font-bold">{numPages}</span>
              </p>
            </div>
            <FaChevronCircleRight
              color="#35424a"
              cursor={"pointer"}
              size={20}
              onClick={() =>
                setPageNumber((prev) => {
                  if (prev === numPages) return 1;
                  return prev + 1;
                })
              }
            />
          </div>
        );
      case "mp3":
        return (
          <div className="mx-2">
            <ReactAudioPlayer src={document.filePath} autoPlay controls />
          </div>
        );
      case "mp4":
        return (
          <div className="mx-2">
            <video src={document.filePath} controls />
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
