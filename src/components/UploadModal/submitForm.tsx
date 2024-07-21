import { FormikHelpers } from "formik";

export function submitForm(
  formData: FormData,
  // token: string,
  actions: FormikHelpers<{
    logo: never[];
    images: never[];
    headerFonts: never[];
    textFonts: never[];
    colorPalette: string[];
    collectionsName: string;
  }>,
  onClose: () => void
) {
  return async () => {
    try {
      // TODO: api url
      const response = await fetch(`https://outgoing-termite-roughly.ngrok-free.app/api/files/uploadCollection`, {
        method: "POST",
        headers: {
          // "Authorization": `Bearer ${token}`,
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE1NDgwNDQsImV4cCI6MTcyMTU1MTY0NH0.T_Ij8F35A-3SuawCuclc1eH-Pyf9PYRviSJ-NLSan3E`,
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
