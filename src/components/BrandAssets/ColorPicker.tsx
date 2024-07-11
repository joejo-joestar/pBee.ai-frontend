import { Field, FieldArray } from "formik";
import { SetStateAction } from "react";
import { RemoveIcon } from "@/components/BrandAssets/RemoveIcon";

type Props = {
  values: string[];
  onChange: (e: { target: { value: SetStateAction<string> } }) => void;
};

const ColorPalette = ({ values }: Props) => {
  return (
    <div className="flex flex-col gap-2">
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
                      className="bg-tabContainer relative flex min-h-16 flex-row rounded-xl p-1"
                    >
                      <div className="bg-tabContainer size-14 overflow-hidden rounded-xl border border-solid">
                        {/* Color Picker */}
                        <Field
                          className="-m-[25%] size-20 cursor-pointer"
                          name={`colorPalette[${index}]`}
                          placeholder="#303030"
                          type="color"
                        />
                      </div>

                      {/* Hex Field */}
                      <Field
                        className={`rounded-xl bg-transparent px-4 placeholder:text-sm placeholder:text-slate-400/50`}
                        name={`colorPalette[${index}]`}
                        placeholder="#303030"
                        type="text"
                      />

                      {/* Remove Button */}
                      <button type="button" onClick={() => remove(index)}>
                        <RemoveIcon />
                      </button>
                    </div>
                  ))}
                </>
              )}

              {/* Add New Color Button*/}
              <button
                type="button"
                className="bg-tabContainer ml-1 size-14 rounded-xl text-lg font-black"
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
