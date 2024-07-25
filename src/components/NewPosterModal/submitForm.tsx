import axios from "axios";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

export function submitForm(
  jsonData: {
    tone: string;
    aspectRatio: string;
    resolution: string;
    collectionName: string;
  },
  actions: FormikHelpers<{
    tone: string;
    aspectRatio: string;
    resolution: string;
    collectionName: string;
  }>,
  onClose: () => void,
) {
  const navigate = useNavigate();

  return async () => {
    try {
      const url = `https://firm-gently-ladybird.ngrok-free.app/api/chat/sessions`;
      const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4MjM3NjEsImV4cCI6MTcyMTgyNzM2MX0.B5HkVCMPRqespk9dIE-pohEpA1ApOgJ9kn-Zrg2oBy8",
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
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
        navigate(`/chat/${sessionId}`); // Navigate to the chat page using sessionId
      } else {
        console.error("Error submitting form: ", response.data);
        actions.setSubmitting(false); // Reset form submission state
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      actions.setSubmitting(false); // Reset form submission state
    }
  };
}
