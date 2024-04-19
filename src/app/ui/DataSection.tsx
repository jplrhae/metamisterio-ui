"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MetadataField, metadataFields } from "../lib/definitions";

export default function DataSection() {
  const [time, setTime] = useState(30);
  const [currentField, setCurrentField] = useState<MetadataField>(
    metadataFields[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 30) {
      document.querySelector(".timer")?.classList.add("text-blue-400");
    }
    if (time === 20) {
      document.querySelector(".timer")?.classList.remove("text-blue-400");
      document.querySelector(".timer")?.classList.add("text-yellow-400");
    }
    if (time === 10) {
      document.querySelector(".timer")?.classList.remove("text-yellow-400");
      document.querySelector(".timer")?.classList.add("text-red-400");
    }
    if (time === 0) {
      handleTimeOver();
    }
  }, [time]);

  const handleTimeOver = () => {
    setTime(30);
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
    <div className="h-1/4 flex flex-col px-2 bg-backdrop text-white">
      <div className="flex-1 flex flex-col justify-center items-center ">
        <div className="font-bold">{currentField.displayName}</div>
        <input
          type={currentField.inputType}
          className="border-2 rounded-md p-2 md:w-2/3 mt-2 mb-2 text-black"
          placeholder={currentField.placeholder}
          value={currentField.value}
          onChange={(e) => {
            currentField.value = e.target.value;
            setCurrentField((currentField) => ({ ...currentField }));
          }}
        />
        <Button label="Enviar" color="primary" />
      </div>
      <div className="self-end text-blue-400 font-bold timer">{time}s</div>
    </div>
  );
}
