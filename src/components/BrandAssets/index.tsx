import ModalCard from "@/components/shared/ModalCard";
import DragNDrop from "./DragNDrop";
import { Formik, Form, Field } from "formik";
import ColorPicker from "./ColorPicker";
import { initialValues } from "./initialValues";

type Props = { isVisible: boolean; onClose(): void };

const BrandAssets = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  return (
    <ModalCard onClose={onClose}>
      {/* Header */}
      <div>
        <h1>Brand Assets</h1>
        <p>Import your brand assets, fonts and specify colors</p>
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
          <Form>
            {/* TODO: Get file details from `files-ui/react` library to formik */}
            {/* DropZones */}
            <div className="flex flex-col">
              <label htmlFor="logos">Logos</label>
              <DragNDrop fileType={".png, .svg"} id={"logos"} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="images">images</label>
              <DragNDrop fileType={".png, .svg"} id={"images"} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="headerFont">Header Font</label>
              <DragNDrop fileType={".ttf, .otf"} id={"headerFont"} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="textFont">Text Font</label>
              <DragNDrop fileType={".ttf, .otf"} id={"textFont"} />
            </div>

            {/* Completed */}

            {/* Color Picker */}
            <ColorPicker values={values.colorPalette} />

            {/* Folder Name */}
            <div className="flex flex-col">
              <label htmlFor="collectionName">Collection Name</label>
              <Field
                name="collectionName"
                type="text"
                placeholder="Asset Name"
              />
            </div>
            <div className="flex flex-row justify-evenly gap-6">
              {/* Reset Button */}
              <button
                className="flex w-60 select-none flex-col items-center justify-center gap-1 rounded-full border-2 border-solid border-lavender70 px-12 py-4 transition duration-500 hover:border-lavender70/40"
                type="reset"
                onClick={() => {
                  resetForm();
                }}
              >
                Reset All
              </button>
              {/* Apply Button */}
              <button
                className="flex w-60 select-none flex-col items-center justify-center gap-1 rounded-full border-2 border-solid border-lavender70 bg-buttonGradient px-12 py-4 transition duration-500 hover:border-lavender70/40"
                type="submit"
                disabled={isSubmitting}
              >
                apply
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalCard>
  );
};

export default BrandAssets;
