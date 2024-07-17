import ModalCard from "@/components/shared/ModalCard";
import FileUpload from "./FileUpload";
import { Formik, Form, Field } from "formik";
import ColorPicker from "./ColorPicker";
import { initialValues } from "./initialValues";
import { SetStateAction, useState } from "react";
import { otherButton, submitButton } from "../shared/FormConst";
import { array, object, string } from "yup";
import { Loading } from "./Loading";
import { submitForm } from "./submitForm";

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
        validationSchema={object().shape({
          colorPallet: array(string().required()).min(1),
          collectionName: string().required(),
        })}
        onSubmit={(values, actions) => {
          // Data to Submit
          const formData = new FormData();
          // Collection Name
          formData.append("collectionName", values.collectionName);

          // Color Pallet
          formData.append("colorPallet", values.colorPallet.toString());

          // Logos
          if (values.logos) {
            values.logos.forEach((file) => {
              formData.append("logos", file);
              // NOTE: For Debugging Purposes
              console.log("logos[]", file);
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
          if (values.headerFont) {
            values.headerFont.forEach((file) => {
              formData.append("headerFonts", file);
              // NOTE: For Debugging Purposes
              console.log("headerFonts[]", file);
            });
          }
          // Text Font
          if (values.textFont) {
            values.textFont.forEach((file) => {
              formData.append("textFonts", file);
              // NOTE: For Debugging Purposes
              console.log("textFonts[]", file);
            });
          }

          // NOTE: For Debugging Purposes
          alert(JSON.stringify(values, null, 2));
          for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
          }

          const handleSubmit = submitForm(formData, actions);

          handleSubmit();
        }}
      >
        {({ values, isSubmitting, isValid }) => (
          <Form className="flex flex-col gap-5">
            {/* Logo Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="logos" />
              Logos
              <FileUpload image name={"logos"} />
            </div>

            {/* Image Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="images" />
              Images
              <FileUpload image name={"images"} />
            </div>

            {/* Header Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="headerFont" />
              Header Font
              <FileUpload font name={"headerFont"} />
            </div>

            {/* Text Font Dropzone */}
            <div className="flex flex-col gap-2">
              <label id="textFont" />
              Text Font
              <FileUpload font name={"textFont"} />
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
              {/* Cancel Button */}
              <button className={otherButton} type="reset" onClick={onClose}>
                Cancel
              </button>
              {/* Apply Button */}
              <button
                className={submitButton}
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? <Loading /> : "Apply"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalCard>
  );
};

export default BrandAssets;
