import { useState } from "react";
import { tones } from "./tone";

export const ToneSelector = () => {
  const [selectedTone, setSelectedTone] = useState<string>(tones[0]);

  const handleToneChange = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <div className="flex flex-row justify-between gap-4 rounded-xl bg-[#1f1c33] p-1">
      {tones.map((tone) => (
        <button
          key={tone}
          className={`w-32 rounded-xl px-5 py-3 text-lg ${selectedTone === tone ? "active bg-violet-500 text-white" : "hover:bg-violet-300/30"}`}
          onClick={() => handleToneChange(tone)}
        >
          {tone}
        </button>
      ))}
    </div>
  );
};
