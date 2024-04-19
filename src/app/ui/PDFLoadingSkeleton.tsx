import React from "react";
import "./PDFLoadingSkeleton.css";
import { TailSpin } from "react-loading-icons";

const PDFLoadingSkeleton: React.FC = () => {
  return (
    <div className="pdf-loading-skeleton">
      <div className="page-loading-skeleton flex items-center justify-center">
        <TailSpin stroke="#5F0F2D" />
      </div>
    </div>
  );
};

export default PDFLoadingSkeleton;
