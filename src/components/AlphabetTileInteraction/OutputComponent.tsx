"use client";
import { useState } from "react";
import { alphabet } from "./AlphabetTileInteraction";

const OutputComponent = () => {
  const [outputString, setOutputString] = useState<string>("");

  const handleTileClick = (letter: string) => {
    let newString = outputString + letter;
    newString = newString.replace(/([A-Z])\1{2,}/g, "_");
    setOutputString(newString);
  };
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleTileClick(letter)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="text-2xl ">
        <strong>Output String: </strong>
        <span id="outputString">{outputString}</span>
      </div>
    </div>
  );
};

export default OutputComponent;
