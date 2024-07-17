import { FormikHelpers } from "formik";

export function submitForm(
  formData: FormData,
  actions: FormikHelpers<{
    logos: never[];
    images: never[];
    headerFont: never[];
    textFont: never[];
    colorPallet: string[];
    collectionName: string;
  }>,
) {
  return async () => {
    try {
      // TODO: api url
      const response = await fetch(`apiurl`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Success scenario
        console.log("Form submission successful!");
        actions.setSubmitting(false); // Reset form submission state
      } else {
        // Error scenario
        console.error("Error submitting form: ", await response.text());
        actions.setSubmitting(false); // Reset form submission state
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      actions.setSubmitting(false);
    }
  };
}
