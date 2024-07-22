import axios from "axios";
import { FormikHelpers } from "formik";

export function submitForm(
  formData: FormData,
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
      const response = await axios.post(
        `https://outgoing-termite-roughly.ngrok-free.app/[xxxxx]`, // Replace with your API URL
        formData,
        {
          headers: {
            // "Authorization": `Bearer ${token}`,
            Authorization: `Bearer key`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status === 201) {
        // Success scenario
        console.log("Form submission successful!");
        actions.setSubmitting(false); // Reset form submission state
        onClose();
      } else {
        // Error scenario
        console.error("Error submitting form: ", response.data);
        actions.setSubmitting(false); // Reset form submission state
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      actions.setSubmitting(false); // Reset form submission state
    }
  };
}
