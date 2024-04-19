"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MetadataField } from "../lib/definitions";
import { metadataFields } from "../lib/data";
import { matchSorter } from "match-sorter";

interface DataSectionProps {
  indexPointOptions: string[];
}

export default function DataSection({ indexPointOptions }: DataSectionProps) {
  const [time, setTime] = useState(30);
  const [currentValue, setCurrentValue] = useState<string>("");
  const [currentField, setCurrentField] = useState<MetadataField>(
    metadataFields[0]
  );
  const [selectedIndexPoints, setSelectedIndexPoints] = useState<string[]>([]);
  const [closestIndexPoint, setClosestIndexPoint] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 20) {
      document.querySelector(".timer")?.classList.remove("text-blue-400");
      document.querySelector(".timer")?.classList.add("text-yellow-400");
    }
    if (time === 10) {
      document.querySelector(".timer")?.classList.remove("text-yellow-400");
      document.querySelector(".timer")?.classList.add("text-red-400");
    }
    if (time === 0) {
      handleNextField();
    }
  }, [time]);

  useEffect(() => {
    setTime(30);
    setClosestIndexPoint("");
    setCurrentValue("");
    document.querySelector(".timer")?.classList.add("text-blue-400");
    document.querySelector(".timer")?.classList.remove("text-red-400");
  }, [currentField]);

  useEffect(() => {
    if (currentField.id === "indexPoint" && currentValue.length > 1) {
      const filteredOptions = matchSorter(indexPointOptions, currentValue);
      setClosestIndexPoint(filteredOptions[0]);
    } else {
      setClosestIndexPoint("");
    }
  }, [currentValue]);

  useEffect(() => {
    console.log(closestIndexPoint);
  }, [closestIndexPoint]);

  const handleNextField = () => {
    const currentIndex = metadataFields.findIndex(
      (field) => field.id === currentField.id
    );
    if (currentIndex === metadataFields.length - 1) {
      setCurrentField(metadataFields[0]);
    } else {
      setCurrentField(metadataFields[currentIndex + 1]);
    }
  };

  return (
    <div className="h-1/4 flex flex-col  bg-secondary-light text-primary">
      <div className="flex-1 flex flex-col justify-center items-center mx-2">
        <div className="font-bold">{currentField.displayName}</div>
        {currentField.id === "indexPoint" ? (
          <div className="flex flex-row w-full gap-2">
            <input
              type={currentField.inputType}
              className="border-2 border-primary rounded-md p-2 w-full my-2 text-primary bg-off-white"
              placeholder={currentField.placeholder}
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.target.value);
              }}
            />
            <div className="bg-primary rounded-md p-2 w-full my-2 text-off-white hover:bg-opacity-80 cursor-pointer">
              {closestIndexPoint}
            </div>
          </div>
        ) : (
          <input
            type={currentField.inputType}
            className="border-2 border-primary rounded-md p-2 w-full my-2 text-primary bg-off-white"
            placeholder={currentField.placeholder}
            value={currentValue}
            onChange={(e) => {
              setCurrentValue(e.target.value);
            }}
          />
        )}
        <Button label="Enviar" color="primary" />
      </div>
      <div
        className="text-2xl sm:text-3xl text-center bg-primary font-bold timer p-1"
        onClick={() => handleNextField()}
      >
        {time}s
      </div>
    </div>
  );
}
