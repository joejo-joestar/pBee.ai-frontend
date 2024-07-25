import ModalCard from "@/components/shared/ModalCard";
import { Formik, Form } from "formik";
import { useState } from "react";
import {
  buttonDisabled,
  secondaryButton,
  primaryButton,
} from "../shared/FormConst";
import { array, object, string } from "yup";
import Spinner from "../shared/Spinner";
import { submitForm } from "./submitForm";
import { Separator } from "@/assets/Separator";
import { initialValues } from "./initialValues";
import LogoSection from "./LogoSection";
import ImageSection from "./ImageSection";
import HeaderFontSection from "./HeaderFontSection";
import TextFontSection from "./TextFontSection";
import ColorPickerSection from "./ColorPickerSection";
import CollectionNameField from "./CollectionNameField";

type Props = {
  isVisible: boolean;
  onClose(): void;
};

const UploadModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleProgress = (progress: number) => {
    setUploadProgress(progress);
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

      <Separator />

      {/* Body */}
      <Formik
        initialValues={initialValues}
        validationSchema={object().shape({
          logo: array().max(1),
          colorPalette: array(string().required()).min(1),
          collectionsName: string().required(),
        })}
        onSubmit={(values, actions) => {
          const formData = new FormData();

          formData.append("collectionsName", values.collectionsName);
          values.colorPalette.forEach((color) =>
            formData.append("colorPalette", color),
          );

          if (values.logo) {
            values.logo.forEach((file) => formData.append("logo", file));
          }
          if (values.images) {
            values.images.forEach((file) => formData.append("images", file));
          }
          if (values.headerFonts) {
            values.headerFonts.forEach((file) =>
              formData.append("headerFonts", file),
            );
          }
          if (values.textFonts) {
            values.textFonts.forEach((file) =>
              formData.append("textFonts", file),
            );
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
            <LogoSection progress={uploadProgress} />
            <ImageSection progress={uploadProgress} />
            <HeaderFontSection progress={uploadProgress} />
            <TextFontSection progress={uploadProgress} />
            <ColorPickerSection values={values.colorPalette} />
            <CollectionNameField />

            {/* Button Div */}
            <div className="flex flex-row justify-evenly gap-6">
              <button
                className={secondaryButton}
                type="reset"
                onClick={onClose}
              >
                Cancel
              </button>
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
