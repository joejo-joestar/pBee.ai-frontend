import { Field, FieldArray } from "formik";
import React from "react";

interface Color {
  color: string;
}

interface Props {
  values: Color[];
}

const ColorPalette: React.FC<Props> = ({ values }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="colorPalette">Color Palette</label>
      <div className="flex w-fit flex-row gap-3 overflow-auto">
        <FieldArray name="colorPalette">
          {({ push, remove }) => (
            <>
              {values && values.length > 0 && (
                <>
                  {values.map((_color, index) => (
                    <div key={index} className="relative flex flex-row">
                      <Field
                        className="size-14 rounded-xl"
                        name={`colorPalette[${index}].color`}
                        type="color"
                        placeholder="#ffffff"
                      />
                      <button
                        className="absolute right-1 top-1 size-5 rounded-full bg-white p-2 text-sm font-black text-black"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                </>
              )}
              <button
                type="button"
                className="size-14 rounded-xl bg-white font-black text-black"
                onClick={() => push({ color: "" })}
              >
                +
              </button>
            </>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default ColorPalette;
