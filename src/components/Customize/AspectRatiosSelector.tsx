import { Field } from "formik";
// import { aspectRatios } from "./aspectRatios";
import { resolutions } from "./resolutions";
import { ResolutionSelector } from "./ResolutionSelector";
import { container, toggle } from "../shared/FormConst";

const aspectRatios = Object.keys(resolutions);

type Props = {
  formik: any;
};

export const AspectRatioSelector = ({ formik }: Props) => {
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
      <div className={container}>
        {aspectRatios.map((_ratio, index) => (
          <label key={aspectRatios[index]} className={`w-36 ${toggle}`}>
            <Field
              type="radio"
              id={aspectRatios[index]}
              name="aspectRatio"
              value={aspectRatios[index]}
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
            {aspectRatios[index]}
          </label>
        ))}
      </div>

      {resolutions && (
        <div className={container}>
          <ResolutionSelector
            availableResolutions={getSelectedResolutions()} // Pass filtered resolutions
            selectedAspectRatio={values.aspectRatio} // Pass selected resolution from Formik
            onResolutionChange={handleResolutionChange} // Update onChange handler
          />
        </div>
      )}
    </div>
  );
};
