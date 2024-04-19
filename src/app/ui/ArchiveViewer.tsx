"use client";
import React, { useEffect } from "react";

import { Document as PDFDocument, Page } from "react-pdf";
import ReactAudioPlayer from "react-audio-player";
import { Document as ArchiveDocument } from "../lib/definitions";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaFilePdf,
} from "react-icons/fa";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PDFLoadingSkeleton from "./PDFLoadingSkeleton";
import Button from "./Button";

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
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isRenderingPage, setIsRenderingPage] = React.useState(true);
  const getFileExtension = (filePath: string) => {
    return filePath.split(".").pop();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setIsRenderingPage(true);
  }, [pageNumber]);

  const renderFile = () => {
    switch (getFileExtension(archiveDocument.filePath)) {
      case "pdf":
        return (
          <div className="flex flex-col items-center w-full">
            <div
              className="flex flex-row items-center mt-2 bg-primary text-sm rounded p-2 text-off-white hover:bg-opacity-80 cursor-pointer"
              onClick={() => {
                window.open(archiveDocument.filePath, "_blank");
              }}
            >
              <FaFilePdf size={25} className="mr-2" />
              PDF Completo
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-2 overflow-hidden">
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
                  file={archiveDocument.filePath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<PDFLoadingSkeleton />}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={300}
                    className={"sm:hidden"}
                    onRenderSuccess={() => {
                      console.log("rendered");
                      setIsRenderingPage(false);
                    }}
                    loading={<PDFLoadingSkeleton />}
                  />
                  <div className="hidden sm:flex flex-row gap-2">
                    {Array.from(
                      new Array(numPages && numPages <= 5 ? numPages : 5),
                      (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          height={500}
                          loading={<PDFLoadingSkeleton />}
                        />
                      )
                    )}
                  </div>
                </PDFDocument>
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
          </div>
        );
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
