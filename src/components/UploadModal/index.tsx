import ModalCard from "@/components/shared/ModalCard";
import FileUpload from "./FileUpload";
import { Formik, Form, Field } from "formik";
import ColorPicker from "./ColorPicker";
import { initialValues } from "./initialValues";
import { SetStateAction, useState } from "react";
import {
  buttonDisabled,
  secondaryButton,
  primaryButton,
} from "../shared/FormConst";
import { array, object, string } from "yup";
import Spinner from "../shared/Spinner";
import { submitForm } from "./submitForm";

type Props = { isVisible: boolean; onClose(): void };

const UploadModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;
  const [_state, updateState] = useState("#");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleProgress = (progress: number) => {
    setUploadProgress(progress);
  };
  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    updateState(e.target.value);
  };

  return (
    <ModalCard onClose={onClose}>
      {/* Header */}
      <div>
        <h1 className="font-display font-bold">Collections</h1>
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
        validationSchema={object().shape({
          logo: array().max(1),
          colorPalette: array(string().required()).min(1),
          collectionsName: string().required(),
        })}
        onSubmit={(values, actions) => {
          // Data to Submit
          const formData = new FormData();

          // Collection Name
          formData.append("collectionsName", values.collectionsName);

          // Color Palette
          values.colorPalette.forEach((color) =>
            formData.append("colorPalette", color),
          );

          // Logos
          if (values.logo) {
            values.logo.forEach((file) => {
              formData.append("logo", file);
              // NOTE: For Debugging Purposes
              console.log("logo[]", file);
            });
          }
          // Images
          if (values.images) {
            values.images.forEach((file) => {
              formData.append("images", file);
              // NOTE: For Debugging Purposes
              console.log("images[]", file);
            });
          }

          // Header Font
          if (values.headerFonts) {
            values.headerFonts.forEach((file) => {
              formData.append("headerFonts", file);
              // NOTE: For Debugging Purposes
              console.log("headerFonts[]", file);
            });
          }
          // Text Font
          if (values.textFonts) {
            values.textFonts.forEach((file) => {
              formData.append("textFonts", file);
              // NOTE: For Debugging Purposes
              console.log("textFonts[]", file);
            });
          }

          // NOTE: For Debugging Purposes
          for (var pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
          }
          const handleSubmit = submitForm(
            formData,
            actions,
            onClose,
            handleProgress,
          );

          handleSubmit();
        }}
      >
        {({ values, isSubmitting, isValid }) => (
          <Form className="flex flex-col gap-5">
            {/* Logo Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="logo" />
              Logos
              <FileUpload image name={"logo"} progress={uploadProgress} />
            </div>

            {/* Image Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="images" />
              Images
              <FileUpload image name={"images"} progress={uploadProgress} />
            </div>

            {/* Header Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="headerFonts" />
              Header Font
              <FileUpload font name={"headerFonts"} progress={uploadProgress} />
            </div>

            {/* Text Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="textFonts" />
              Text Font
              <FileUpload font name={"textFonts"} progress={uploadProgress} />
            </div>

            {/* Color Picker */}
            <ColorPicker values={values.colorPalette} onChange={handleInput} />

            {/* Folder Name */}
            <div className="flex flex-col gap-2">
              <label id="collectionName">
                Collection Name
                <Field
                  className="min-h-16 w-full rounded-xl bg-tabContainer px-4"
                  name="collectionsName"
                  type="text"
                  placeholder="Asset Name"
                />
              </label>
            </div>

            {/* Button Div */}
            <div className="flex flex-row justify-evenly gap-6">
              {/* Cancel Button */}
              <button
                className={secondaryButton}
                type="reset"
                onClick={onClose}
              >
                Cancel
              </button>
              {/* Apply Button */}
              <button
                className={!isValid ? `${buttonDisabled}` : `${primaryButton}`}
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? <Spinner style={`size-5`} /> : "Apply"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalCard>
  );
};

export default UploadModal;
