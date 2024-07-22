import ModalCard from "@/components/shared/ModalCard";
import { Form, Formik } from "formik";
import { initialValues } from "./initialValues";
import { ToneSelector } from "./TonesSelector";
import { AspectRatioSelector } from "./AspectRatiosSelector";
import CollectionSelector from "./CollectionSelector";
import { secondaryButton, primaryButton } from "../shared/FormConst";
import { submitForm } from "./submitForm";
import { object, string } from "yup";

type Props = { isVisible: boolean; onClose(): void };

const CustomizeModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  return (
    <ModalCard closeOnClick onClose={onClose}>
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
        validationSchema={object().shape({
          tone: string().required(),
          aspectRatio: string().required(),
          resolution: string().required(),
          collection: string().required(),
        })}
        onSubmit={(values, actions) => {
          // Data to Submit
          const formData = new FormData();

          // Tone
          formData.append("tone", values.tone);

          // Aspect Ratio
          formData.append("aspectRatio", values.aspectRatio);

          // Resolution
          formData.append("resolution", values.resolution);

          // Collection Name
          formData.append("collection", values.collection);

          // NOTE: For Debugging Purposes
          for (var pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
          }

          const handleSubmit = submitForm(formData, actions, onClose);

          handleSubmit();
        }}
      >
        {({ values, setValues, isValid, isSubmitting, resetForm }) => (
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
                className={secondaryButton}
                type="reset"
                onClick={() => {
                  resetForm;
                }}
              >
                Reset
              </button>
              {/* Apply Button */}
              <button
                className={primaryButton}
                type="submit"
                disabled={!isValid || isSubmitting}
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

export default CustomizeModal;
