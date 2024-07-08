import React from "react";
import { Field } from "formik";
import { ResolutionCustomize } from "./ResolutionCustomize";
import { Resolution } from "./resolutions";

interface ResolutionProps {
  availableResolutions: Resolution[];
  selectedResolution: string | undefined;
  onResolutionChange: (value: string) => void;
}

export const ResolutionSelector: React.FC<ResolutionProps> = ({
  availableResolutions,
  selectedResolution,
  onResolutionChange,
}) => {
  return (
    <>
      {/* Render custom resolution section if selectedResolution is "Custom" */}
      {selectedResolution === "Custom" && (
        <ResolutionCustomize
          onCustomResolution={(width, height) => {
            onResolutionChange(`custom:${width}x${height}`);
          }}
        />
      )}

      {/* Render predefined resolutions if selectedResolution is not "Custom" */}
      {selectedResolution !== "Custom" && availableResolutions.length > 0 && (
        <div className="flex w-full flex-row justify-between gap-5">
          {availableResolutions.map((resolution) => (
            <label
              key={resolution.value}
              className="w-40 rounded-xl px-5 py-3 text-center text-lg text-violet-200 duration-75 hover:bg-violet-300/30 hover:duration-75 has-[:checked]:bg-violet-500 has-[:checked]:text-white"
            >
              <Field
                type="radio"
                id={resolution.value}
                name="resolution"
                value={resolution.value}
                className="hidden"
                // onChange={onResolutionChange}
              />
              {resolution.value}
            </label>
          ))}
        </div>
      )}
    </>
  );
};
