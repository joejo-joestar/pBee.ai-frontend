// TODO: Split File

import React, { useState, useEffect } from "react";
import { aspectRatios } from "./aspectRatios";
import { Resolution, resolutions } from "./resolutions";
import { ResolutionSelector } from "./ResolutionSelector";
import { ResolutionCustomize } from "./ResolutionCustomize";
import { handleSetCustomResolution } from "./SetCustomResolution";

interface AspectRatioProps {
  selectedAspectRatio: string;
  // The function to call when the aspect ratio changes
  onAspectRatioChange: (value: string) => void;
}

const BUTTON_CLASSES = "w-32 rounded-xl px-5 py-3 text-lg";
const CONTAINER_CLASSES =
  "flex flex-row justify-between gap-4 rounded-xl bg-[#1f1c33] p-1";

export const AspectRatioSelector: React.FC<AspectRatioProps> = ({
  selectedAspectRatio,
  onAspectRatioChange,
}: AspectRatioProps) => {
  // Initialize the available resolutions state with the resolutions for the selected aspect ratio
  const [availableResolutions, setAvailableResolutions] = useState<
    Resolution[]
  >(resolutions[selectedAspectRatio] || []);
  const [selectedResolution, setSelectedResolution] = useState<
    string | undefined
  >();
  // Initialize the custom resolution state
  const [customResolution, setCustomResolution] = useState<{
    width: string;
    height: string;
  }>({ width: "", height: "" });

  // Use the useEffect hook to update the available resolutions when the selected aspect ratio changes
  useEffect(() => {
    setAvailableResolutions(resolutions[selectedAspectRatio] || []);
  }, [selectedAspectRatio]);

  return (
    <div className="flex flex-col gap-5">
      // Render the aspect ratio buttons
      <div className={CONTAINER_CLASSES}>
        {aspectRatios.map((ratio) => (
          <button
            key={ratio.value}
            className={`${BUTTON_CLASSES} ${selectedAspectRatio === ratio.value ? "bg-violet-500 text-white" : "hover:bg-violet-300/30"}`}
            onClick={() => onAspectRatioChange(ratio.value)}
          >
            {ratio.value}
          </button>
        ))}
      </div>
      <div className={CONTAINER_CLASSES}>
        {selectedAspectRatio === "Custom" ? (
          <ResolutionCustomize
            onCustomResolution={(width, height) =>
              setCustomResolution(
                handleSetCustomResolution(width, height, onAspectRatioChange),
              )
            }
          />
        ) : (
          <ResolutionSelector
            availableResolutions={availableResolutions}
            selectedResolution={selectedResolution}
            onResolutionChange={setSelectedResolution}
          />
        )}
      </div>
      <div className="text-sm text-gray-500">
        Selected Resolution:{" "}
        {selectedAspectRatio !== "Custom"
          ? selectedResolution
          : customResolution.width && customResolution.height
            ? `${customResolution.width}x${customResolution.height}`
            : "Select a resolution"}
      </div>
    </div>
  );
};
