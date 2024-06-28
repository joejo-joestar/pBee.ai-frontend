import { Resolution } from "./resolutions";

export interface ResolutionProps {
  availableResolutions: Resolution[];
  selectedResolution: string | undefined;
  onResolutionChange: (value: string) => void;
}


export const ResolutionSelector = ({
  availableResolutions,
  selectedResolution,
  onResolutionChange,
}: ResolutionProps) => {
  return (
    <>
      {availableResolutions.map((resolution) => (
        <button
          key={resolution.value}
          className={`w-40 rounded-xl px-5 py-3 text-lg ${
            selectedResolution === resolution.value
              ? "bg-violet-500 text-white"
              : "hover:bg-violet-300/30"
          }`}
          onClick={() => onResolutionChange(resolution.value)}
        >
          {resolution.value}
        </button>
      ))}
    </>
  );
};
