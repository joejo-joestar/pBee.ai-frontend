import React from "react";
import { Field } from "formik";
import { aspectRatios } from "./aspectRatios";
import { resolutions } from "./resolutions";
import { ResolutionSelector } from "./ResolutionSelector";

interface AspectRatioProps {
  formik: any;
}

const CONTAINER_CLASSES =
  "flex flex-row justify-between min-h-[60px] gap-4 rounded-xl bg-[#1f1c33] p-1";

export const AspectRatioSelector: React.FC<AspectRatioProps> = ({ formik }) => {
  const { values, setValues } = formik;
  const handleResolutionChange = (value: string) => {
    setValues({
      ...values,
      resolution: value,
    });
  };

  const getSelectedResolutions = () => {
    if (resolutions && values.aspectRatio) {
      return resolutions[values.aspectRatio] || [];
    }
    return [];
  };

  return (
    <div className="flex flex-col gap-5">
      <div className={CONTAINER_CLASSES}>
        {aspectRatios.map((ratio) => (
          <label
            key={ratio.value}
            className="w-32 rounded-xl px-5 py-3 text-center text-lg text-violet-200 duration-75 hover:bg-violet-300/30 hover:duration-75 has-[:checked]:bg-violet-500 has-[:checked]:text-white"
          >
            <Field
              type="radio"
              id={ratio.value}
              name="aspectRatio"
              value={ratio.value}
              className="hidden"
              onChange={(e: { target: { value: string | number } }) => {
                setValues({
                  ...values,
                  aspectRatio: e.target.value,
                  resolution:
                    resolutions?.[e.target.value]?.[0] || values.resolution,
                });
              }}
            />
            {ratio.value}
          </label>
        ))}
      </div>

      {/* Render resolution selection based on aspect ratio (optional) */}
      {resolutions && ( // Check if resolutions are available
        <div className={`${CONTAINER_CLASSES}`}>
          <ResolutionSelector
            availableResolutions={getSelectedResolutions()} // Pass filtered resolutions
            selectedResolution={values.resolution} // Pass selected resolution from Formik
            onResolutionChange={handleResolutionChange} // Update onChange handler
          />
        </div>
      )}
    </div>
  );
};
