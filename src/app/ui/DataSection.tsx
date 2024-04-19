import React from "react";
import Button from "./Button";

export default function DataSection() {
  return (
    <div className="h-1/4 flex flex-col px-2">
      <div className="flex-1 flex flex-col justify-center items-center ">
        <div>Título</div>
        <input
          type="text"
          className="border-2 rounded-md p-2 md:w-2/3 mt-2 mb-2"
          placeholder="Digite o título"
        />
        <Button label="Enviar" color="primary" />
      </div>
      <div className="self-end text-red-400 font-bold">30s</div>
    </div>
  );
}
