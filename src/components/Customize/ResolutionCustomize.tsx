
// TODO: How to use this?

import React from "react";
import { Field } from "formik"; // Import Formik's Field component

interface AspectRatioProps {
  onCustomResolution?: (width: string, height: string) => void;
}

export const ResolutionCustomize: React.FC<AspectRatioProps> = ({
  onCustomResolution,
}) => {
  return (
    <>
      <label htmlFor="customWidth" className="mb-2 block text-sm font-medium">
        Width:
      </label>
      <Field
        type="number"
        id="customWidth"
        name="customWidth"
        placeholder="Width"
        className="w-full rounded-xl border border-purple-600 p-3"
      />
      <label htmlFor="customHeight" className="mb-2 block text-sm font-medium">
        Height:
      </label>
      <Field
        type="number"
        id="customHeight"
        name="customHeight"
        placeholder="Height"
        className="w-full rounded-xl border border-purple-600 p-3"
      />
      <button
        className="w-auto rounded-xl bg-violet-500 px-4 py-3 text-white"
        onClick={() => {
          const customWidth = document.getElementById("customWidth");
          const customHeight = document.getElementById("customHeight");
          if (customWidth && customHeight) {
            onCustomResolution?.(
              customWidth.toString(),
              customHeight.toString(),
            );
          }
        }}
      >
        Set
      </button>
    </>
  );
};
