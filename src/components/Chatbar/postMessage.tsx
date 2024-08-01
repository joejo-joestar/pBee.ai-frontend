import axios from "axios";

const postMessage = async (
  sessionId: string | undefined,
  content: string,
  token: string,
) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/messages`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };

    const response = await axios.post(
      url, { sessionId: sessionId, content: content }, config,
    );
    return response.data.content;
  } catch (error) {
    console.error("Error posting message:", error);
    return null;
  }
};

export default postMessage;
