import axios from "axios";

const fetchMessages = async (sessionId: string, token: string) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions/${sessionId}/messages`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };

    const response = await axios.get(url, config);
    const messages = response.data.messages.map(
      (message: { type: string; content: string }) => ({
        text: message.content,
        isUser: message.type === "request",
      }),
    );
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};

export default fetchMessages;
