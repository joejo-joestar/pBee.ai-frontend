import axios from "axios";
import { FormikHelpers } from "formik";

export async function submitForm(
  jsonData: {
    tone: string;
    aspectRatio: string;
    resolution: string;
    collectionsName: string;
  },
  actions: FormikHelpers<{
    tone: string;
    aspectRatio: string;
    resolution: string;
    collectionsName: string;
  }>,
  onClose: () => void,
  navigate: (path: string) => void,
) {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions`;
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5OCJ9LCJpYXQiOjE3MjE5MjMzNzksImV4cCI6MTcyMTk2NjU3OX0.nSrQjhDOSVKUSgohpGD6ncz-fi6Bo1saRUANlzHQj_o",
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };

    console.log(jsonData);

    const response = await axios.post(url, jsonData, config);

    if (response.status === 201) {
      const { sessionId, userId, ...rest } = response.data;
      console.log("Form submission successful!");

      // TODO: Testing
      console.log("Received data:", {
        sessionId,
        userId,
        ...rest,
      });

      actions.setSubmitting(false); // Reset form submission state
      onClose();
      navigate(`chat/${sessionId}`); // Navigate to the chat page using sessionId
    } else {
      console.error("Error submitting form: ", response.data);
      actions.setSubmitting(false); // Reset form submission state
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Inspect the error response
      console.error("Error submitting form: ", error.response.data);
    } else {
      console.error("Error submitting form: ", error);
    }
    actions.setSubmitting(false); // Reset form submission state
  }
}
