import { Field, FieldArray } from "formik";
import React, { SetStateAction } from "react";

interface Props {
  values: string[];
  onChange: (e: { target: { value: SetStateAction<string> } }) => void;
}

const ColorPalette: React.FC<Props> = ({ values }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="colorPalette">Color Palette</label>
      <div className="flex w-fit flex-col gap-3 overflow-auto">
        <FieldArray name="colorPalette">
          {({ push, remove }) => (
            <>
              {values && values.length > 0 && (
                <>
                  {values.map((_color, index) => (
                    <div
                      key={index}
                      className="relative flex flex-row rounded-xl bg-[#3f386d80] p-1"
                    >
                      <div className="size-14 overflow-hidden rounded-xl border border-solid border-[#3f386d]">
                        {/* Color Picker */}
                        <Field
                          className="-m-[25%] size-20"
                          name={`colorPalette[${index}]`}
                          type="color"
                        />
                      </div>
                      {/* Hex Field */}
                      <Field
                        className={`rounded-xl bg-transparent px-4`}
                        name={`colorPalette[${index}]`}
                        placeholder="#131121"
                        type="text"
                      />
                      {/* Remove Button */}
                      <button type="button" onClick={() => remove(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </>
              )}
              <button
                type="button"
                className="ml-1 size-14 rounded-xl bg-white font-black text-black"
                onClick={() => push("")}
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
