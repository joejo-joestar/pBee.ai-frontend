import { tones } from "./tones";
import { Field } from "formik";

export const ToneSelector = () => {
  return (
    <div className="flex flex-row justify-between gap-4 rounded-xl bg-[#1f1c33] p-1 text-black">
      <div role="group" className="flex flex-row justify-between gap-5">
        {tones.map((tone) => (
          <label
            key={tone}
            className="w-32 rounded-xl px-5 py-3 text-center text-lg text-violet-200 duration-75 hover:bg-violet-300/30 hover:duration-75 has-[:checked]:bg-violet-500 has-[:checked]:text-white"
          >
            <Field
              type="radio"
              id={tone}
              name="tone"
              value={tone}
              className="hidden"
            />
            {tone}
          </label>
        ))}
      </div>
    </div>
  );
};
