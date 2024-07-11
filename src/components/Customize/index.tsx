import ModalCard from "@/components/shared/ModalCard";
import { Form, Formik } from "formik";
import { initialValues } from "./initialValues";
import { ToneSelector } from "./TonesSelector";
import { AspectRatioSelector } from "./AspectRatiosSelector";
import CollectionSelector from "./CollectionSelector";
import { otherButton, submitButton } from "../shared/FormConst";

type Props = { isVisible: boolean; onClose(): void };

const Customize = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  return (
    <ModalCard onClose={onClose}>
      {/* Header */}
      <div>
        <h1 className="font-display font-bold">Customize</h1>
        <p className="font-body font-semibold">
          Select a specific style and format for your poster
        </p>
      </div>

      {/* Separator */}
      <div className="h-0 w-auto border border-solid border-cardColor" />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2)); // For debugging, replace with submit logic
        }}
      >
        {({ values, setValues, isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-5">
            {/* Tone Selector */}
            <div>
              <h3>Tones</h3>
              <ToneSelector />
            </div>

            {/* Aspect Ratios and Resolutions Selector */}
            <div>
              <h3>Aspect Ratios & Resolutions</h3>
              <AspectRatioSelector formik={{ values, setValues }} />
            </div>

            {/* Search Dropdown for Collection Name */}
            <div>
              <h3>Collections</h3>
              <CollectionSelector />
            </div>

            {/* Button Div */}
            <div className="flex flex-row justify-evenly">
              {/* Reset Button */}
              <button
                className={otherButton}
                type="reset"
                onClick={() => {
                  resetForm;
                }}
              >
                Reset
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

export default Customize;
