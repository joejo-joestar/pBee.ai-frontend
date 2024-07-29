import axios from "axios";
import { FormikHelpers } from "formik";
import { User } from 'firebase/auth';

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
  currentUser: User | null
) {
  if (!currentUser) {
    console.error("User is not authenticated");
    actions.setSubmitting(false);
    return;
  }

  try {
    const token = await currentUser.getIdToken();
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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

      console.log("Received data:", {
        sessionId,
        userId,
        ...rest,
      });

      actions.setSubmitting(false);
      onClose();
      navigate(`chat/${sessionId}`);
    } else {
      console.error("Error submitting form: ", response.data);
      actions.setSubmitting(false);
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error submitting form: ", error.response.data);
    } else {
      console.error("Error submitting form: ", error);
    }
    actions.setSubmitting(false);
  }
}
