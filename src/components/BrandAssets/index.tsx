import ModalCard from "@/components/shared/ModalCard";
import DragNDrop from "./DragNDrop";
import { Formik, Form, Field } from "formik";
import ColorPicker from "./ColorPicker";
import { initialValues } from "./initialValues";
import { SetStateAction, useState } from "react";
import { otherButton, submitButton } from "../shared/FormConst";

type Props = { isVisible: boolean; onClose(): void };

const BrandAssets = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;
  const [_state, updateState] = useState("#");

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    updateState(e.target.value);
  };

  return (
    <ModalCard onClose={onClose}>
      {/* Header */}
      <div>
        <h1 className="font-display font-bold">Brand Assets</h1>
        <p className="font-body font-semibold">
          Import your brand assets, fonts and specify colors
        </p>
      </div>
      {/* Separator */}
      <div className="h-0 w-auto border border-solid border-cardColor" />
      {/* Body */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-5">
            {/* TODO: Get file details from `files-ui/react` library to formik */}

            {/* Logo Dropzone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="logos">Logos</label>
              <DragNDrop allowedTypes={"image/*"} id={"logos"} />
            </div>

            {/* Image Dropzone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="images">Images</label>
              <DragNDrop allowedTypes={"image/*"} id={"images"} />
            </div>

            {/* Header Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="headerFont">Header Font</label>
              <DragNDrop allowedTypes={".ttf, .otf"} id={"headerFont"} />
            </div>

            {/* Text Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="textFont">Text Font</label>
              <DragNDrop allowedTypes={".ttf, .otf"} id={"textFont"} />
            </div>

            {/* Color Picker */}
            <ColorPicker values={values.colorPalette} onChange={handleInput} />

            {/* Folder Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="collectionName">Collection Name</label>
              <Field
                className="bg-tabContainer min-h-16 w-full rounded-xl px-4"
                name="collectionName"
                type="text"
                placeholder="Asset Name"
              />
            </div>

            {/* Button Div */}
            <div className="flex flex-row justify-evenly gap-6">
              {/* Reset Button */}
              <button
                className={otherButton}
                type="reset"
                onClick={() => {
                  resetForm();
                }}
              >
                Reset All
              </button>
              {/* Apply Button */}
              <button
                className={submitButton}
                type="submit"
                // disabled={isSubmitting}
              >
                Apply
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalCard>
  );
};

export default BrandAssets;
