import axios from "axios";
import { FormikHelpers } from "formik";
import { User } from "firebase/auth"; // Import the User type from Firebase

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
  onProgress: (progress: number) => void,
  currentUser: User | null, // Accept currentUser as a parameter
) {
  return async () => {
    if (!currentUser) {
      console.error("User not authenticated");
      actions.setSubmitting(false); // Reset form submission state
      return;
    }

    try {
      const token = await currentUser.getIdToken(); // Get the token

      const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/uploadCollection`;

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Use dynamic token here
          "Content-Type": "multipart/form-data",
          "ngrok-skip-browser-warning": "true",
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
      });

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
