import ModalCard from "@/components/shared/ModalCard";
import ImageUpload from "./ImageUpload";
import { Formik, Form, Field } from "formik";
import ColorPicker from "./ColorPicker";
import { initialValues } from "./initialValues";
import { SetStateAction, useState } from "react";
import { otherButton, submitButton } from "../shared/FormConst";
import FontUpload from "./FontUpload";
import { array, object, string } from "yup";

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
        // Checking Validation
        validationSchema={object({
          // logos: array(
          //   object({
          //     url: string().required(),
          //   }),
          // ),
          // images: array(
          //   object({
          //     url: string().required(),
          //   }),
          // ),
          colorPallet: array(string().required()).min(1),
          collectionName: string().required(),
        })}
        onSubmit={(values) => {
          console.log("values", values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, isSubmitting, isValid, resetForm }) => (
          <Form className="flex flex-col gap-5">
            {/* TODO: Get file details from `files-ui/react` library to formik */}

            {/* Logo Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="logos" />
              Logos
              <ImageUpload name={"logos"} />
            </div>

            {/* Image Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="images" />
              Images
              <ImageUpload name={"images"} />
            </div>

            {/* Header Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="headerFont" />
              Header Font
              <FontUpload name={"headerFont"} />
            </div>

            {/* Text Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="textFont" />
              Text Font
              <FontUpload name={"textFont"} />
            </div>

            {/* Color Picker */}
            <ColorPicker values={values.colorPallet} onChange={handleInput} />

            {/* Folder Name */}
            <div className="flex flex-col gap-2">
              <label id="collectionName">
                Collection Name
                <Field
                  className="min-h-16 w-full rounded-xl bg-tabContainer px-4"
                  name="collectionName"
                  type="text"
                  placeholder="Asset Name"
                />
              </label>
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
                disabled={!isValid}
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
