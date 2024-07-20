import { FormikHelpers } from "formik";

export function submitForm(
  formData: FormData,
  // token: string,
  actions: FormikHelpers<{
    tone: string;
    aspectRatio: string;
    resolution: string;
    collection: string;
  }>,
  onClose: () => void,
) {
  return async () => {
    try {
      // TODO: api url
      const response = await fetch(`apiurl`, {
        method: "POST",
        headers: {
          // "Authorization": `Bearer ${token}`,
          Authorization: `Bearer key`,
        },
        body: formData,
      });

      if (response.ok) {
        // Success scenario
        console.log("Form submission successful!");
        actions.setSubmitting(false); // Reset form submission state
        onClose();
      } else {
        // Error scenario
        console.error("Error submitting form: ", await response.text());
        actions.setSubmitting(false); // Reset form submission state
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      actions.setSubmitting(false); // Reset form submission state
    }
  };
}
