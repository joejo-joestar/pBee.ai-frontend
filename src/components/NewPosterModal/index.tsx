import { useState } from "react";
import ModalCard from "@/components/shared/ModalCard";
import { Form, Formik } from "formik";
import { initialValues } from "./initialValues";
import { ToneSelector } from "./TonesSelector";
import { AspectRatioSelector } from "./AspectRatiosSelector";
import CollectionSelector from "./CollectionSelector";
import { secondaryButton, primaryButton } from "../shared/FormConst";
import { submitForm } from "./submitForm";
import { object, string } from "yup";
import UploadModal from "../UploadModal";
import { Separator } from "@/assets/Separator";
import { useCollections } from "@/hooks/useCollections";

type Props = { isVisible: boolean; onClose(): void };

const NewPosterModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [showNewPosterModal, setShowNewPosterModal] = useState<boolean>(true);
  const { fetchCollections } = useCollections();

  const handleCloseNewPosterModal = () => {
    setShowNewPosterModal(false);
    onClose();
  };

  const handleOpenUploadModal = () => {
    setShowNewPosterModal(false);
    setShowUploadModal(true);
  };

  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
    setShowNewPosterModal(true);
    fetchCollections();
  };

  return (
    <>
      {showNewPosterModal && (
        <ModalCard closeOnClick onClose={handleCloseNewPosterModal}>
          {/* Header */}
          <div>
            <h1 className="font-display font-bold">New Poster</h1>
            <p className="font-body font-semibold">
              Select a specific style and format for your poster
            </p>
          </div>

          <Separator />

          <Formik
            initialValues={initialValues}
            validationSchema={object().shape({
              tone: string().required(),
              aspectRatio: string().required(),
              resolution: string().required(),
              collectionName: string().required(),
            })}
            onSubmit={(values, actions) => {
              // Data to Submit
              const jsonData = {
                tone: values.tone,
                aspectRatio: values.aspectRatio,
                resolution: values.resolution,
                collectionName: values.collectionName,
              };

              const handleSubmit = submitForm(jsonData, actions, onClose);

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
                  <CollectionSelector
                    setShowUploadModal={handleOpenUploadModal}
                  />
                </div>

                {/* Button Div */}
                <div className="flex flex-row justify-evenly">
                  {/* Reset Button */}
                  <button
                    className={secondaryButton}
                    type="reset"
                    onClick={() => {
                      resetForm();
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
      )}

      <UploadModal
        isVisible={showUploadModal}
        onClose={handleCloseUploadModal}
      />
    </>
  );
};

export default NewPosterModal;
