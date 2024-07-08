import ModalCard from "@/components/shared/ModalCard";
import { Form, Formik } from "formik";
import { initialValues } from "./initialValues";
import { ToneSelector } from "./TonesSelector";
import { AspectRatioSelector } from "./AspectRatiosSelector";

type Props = { isVisible: boolean; onClose(): void };

const Customize = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  return (
    <ModalCard onClose={onClose}>
      {/* Header */}
      <div>
        <h1>Customize</h1>
        <p>Select a specific style and format for your poster</p>
      </div>

      {/* Separator */}
      <div className="h-0 w-auto border border-solid border-cardColor" />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2)); // For debugging, replace with your submit logic
        }}
      >
        {({ values, setValues, isSubmitting, resetForm }) => (
          <Form>
            {/* Body */}
            <div>
              <h3>Tones</h3>
              <ToneSelector />
            </div>
            <div>
              <h3>Aspect Ratios & Resolutions</h3>
              <AspectRatioSelector formik={{ values, setValues }} />
            </div>
            <div className="flex flex-row justify-evenly">
              <button
                className="flex w-60 select-none flex-col items-center justify-center gap-1 rounded-full border-2 border-solid border-lavender70 px-12 py-4 transition duration-500 hover:border-lavender70/40"
                type="reset"
                onClick={() => {
                  resetForm;
                }}
              >
                Reset
              </button>
              <button
                className="flex w-60 select-none flex-col items-center justify-center gap-1 rounded-full border-2 border-solid border-lavender70 bg-buttonGradient px-12 py-4 transition duration-500 hover:border-lavender70/40"
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

export default Customize;
