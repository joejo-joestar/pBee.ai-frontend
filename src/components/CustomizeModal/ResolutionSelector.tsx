import { Field } from "formik";
import { ResolutionCustomize } from "./ResolutionCustomize";
import { toggle } from "../shared/FormConst";

type Props = {
  selectedAspectRatio: string;
  availableResolutions: string[];
  onResolutionChange: (value: string) => void;
};

export const ResolutionSelector = ({
  selectedAspectRatio,
  availableResolutions,
  onResolutionChange,
}: Props) => {
  return (
    <>
      {/* Render custom resolution section if selectedResolution is "Custom" */}
      {availableResolutions.length === 0 &&
        selectedAspectRatio === "Custom" && (
          <ResolutionCustomize
            onCustomResolution={(width, height) => {
              onResolutionChange(`${width}x${height}`);
            }}
          />
        )}

      {/* Render predefined resolutions if selectedResolution is not "Custom" */}
      {availableResolutions.length > 0 && selectedAspectRatio !== "Custom" && (
        <div className="flex w-full flex-row justify-between gap-5">
          {availableResolutions.map((_resolution, index) => (
            <label
              key={availableResolutions[index]}
              className={`w-40 ${toggle}`}
            >
              <Field
                type="radio"
                id={availableResolutions[index]}
                name="resolution"
                value={availableResolutions[index]}
                className="hidden"
              />
              {availableResolutions[index]}
            </label>
          ))}
        </div>
      )}
    </>
  );
};
