import axios from "axios";
import { FormikHelpers } from "formik";

export function submitForm(
  formData: FormData,
  actions: FormikHelpers<{
    logo: never[];
    images: never[];
    headerFonts: never[];
    textFonts: never[];
    colorPalette: string[];
    collectionsName: string;
  }>,
  onClose: () => void,
  onProgress: (progress: number) => void, // Add the progress callback
) {
  return async () => {
    try {
      const response = await axios.post(
        "https://firm-gently-ladybird.ngrok-free.app/api/files/uploadCollection",
        formData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5OCJ9LCJpYXQiOjE3MjE5MjMzNzksImV4cCI6MTcyMTk2NjU3OX0.nSrQjhDOSVKUSgohpGD6ncz-fi6Bo1saRUANlzHQj_o`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total !== undefined) {
              // Calculate and call the progress callback
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              onProgress(percentCompleted);
            }
          },
        },
      );

      // Check if the request was successful
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
