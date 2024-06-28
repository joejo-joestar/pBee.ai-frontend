// TODO: Split File

import { useState } from "react";

interface AspectRatioProps {
  onCustomResolution?: (width: string, height: string) => void;
}

export const ResolutionCustomize: React.FC<AspectRatioProps> = ({
  onCustomResolution,
}) => {
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");

  const handleCustomResolutionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.id === "customWidth") {
      setCustomWidth(e.target.value);
    } else if (e.target.id === "customHeight") {
      setCustomHeight(e.target.value);
    }
  };

  const handleSetCustomResolution = () => {
    if (customWidth && customHeight) {
      onCustomResolution?.(customWidth, customHeight);
    }
  };

  return (
    <>
      <input
        type="number"
        id="customWidth"
        inputMode="numeric"
        value={customWidth}
        onChange={handleCustomResolutionChange}
        placeholder="Width"
        className="rounded-xl border border-purple-600 p-3"
      />
      <input
        type="number"
        id="customHeight"
        inputMode="numeric"
        value={customHeight}
        onChange={handleCustomResolutionChange}
        placeholder="Height"
        className="rounded-xl border border-purple-600 p-3"
      />
      <button
        className="w-auto rounded-xl bg-violet-500 px-4 py-3 text-white"
        onClick={handleSetCustomResolution}
      >
        Set
      </button>
    </>
  );
};
