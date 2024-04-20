import React from "react";

import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaFilePdf,
} from "react-icons/fa";
import { pdfjs } from "react-pdf";
import { Document as PDFDocument, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PDFLoadingSkeleton from "./PDFLoadingSkeleton";

interface PDFRendererProps {
  /**
   * The file path of the PDF to render
   */
  filePath: string;
}

export default function PDFRenderer({ filePath }: PDFRendererProps) {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex flex-row items-center mt-2 bg-primary text-sm rounded p-2 text-off-white hover:bg-opacity-80 cursor-pointer"
        onClick={() => {
          window.open(filePath, "_blank");
        }}
      >
        <FaFilePdf size={25} className="mr-2" />
        PDF Completo
      </div>
      <div className="flex-1 flex flex-row items-center justify-center gap-2 overflow-hidden">
        <FaChevronCircleLeft
          color="#35424a"
          cursor={"pointer"}
          className="sm:hidden"
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
            file={filePath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<PDFLoadingSkeleton />}
          >
            <Page
              pageNumber={pageNumber}
              width={300}
              className={"sm:hidden"}
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
          className="sm:hidden"
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
}
