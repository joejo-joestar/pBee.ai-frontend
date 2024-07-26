import axios from "axios";

const fetchMessages = async (sessionId: string) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions/${sessionId}/messages`;
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5OCJ9LCJpYXQiOjE3MjE5MjMzNzksImV4cCI6MTcyMTk2NjU3OX0.nSrQjhDOSVKUSgohpGD6ncz-fi6Bo1saRUANlzHQj_o",
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
    console.log("uhh", messages);

    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};

export default fetchMessages;
