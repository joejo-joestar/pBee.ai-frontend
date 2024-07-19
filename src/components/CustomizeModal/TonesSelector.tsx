import { container, toggle } from "../shared/FormConst";
import { tones } from "./tones";
import { Field } from "formik";

export const ToneSelector = () => {
  return (
    <div role="group" className={container}>
      {tones.map((tone) => (
        <label key={tone.toLowerCase()} className={`${toggle} w-36`}>
          <Field
            type="radio"
            id={tone.toLowerCase()}
            name="tone"
            value={tone.toLowerCase()}
            className="hidden"
          />
          {tone}
        </label>
      ))}
    </div>
  );
};
