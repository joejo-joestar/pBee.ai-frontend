import { ToneSelector } from "./TonesSelector";
import { AspectRatioSelector } from "./AspectRatiosSelector";
import { aspectRatios } from "./aspectRatios";
import { useState } from "react";

type Props = {};

function Customize({}: Props) {
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>(
    aspectRatios[0].label,
  );
  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-productDark/30 backdrop-blur-md">
      <div className="m-auto flex w-fit flex-col gap-5 rounded-2xl bg-productDark px-20 py-10">
        {/* Header */}
        <div>
          <h1>Customize</h1>
          <p>Select a specific style and format for your poster</p>
        </div>
        {/* Separator */}
        <div className="mt-10 h-0 w-auto border border-solid border-cardColor" />
        {/* Body */}
        <div>
          <h3>Tones</h3>
          <ToneSelector />
        </div>
        <div>
          <h3>Aspect Ratios & Resolutions</h3>
          <AspectRatioSelector
            selectedAspectRatio={selectedAspectRatio}
            onAspectRatioChange={setSelectedAspectRatio}
          />
        </div>
      </div>
    </div>
  );
}

export default Customize;
