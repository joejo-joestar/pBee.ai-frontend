import axios from "axios";

const postMessage = async (sessionId: string, content: string) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/messages`;
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5OCJ9LCJpYXQiOjE3MjE5MjMzNzksImV4cCI6MTcyMTk2NjU3OX0.nSrQjhDOSVKUSgohpGD6ncz-fi6Bo1saRUANlzHQj_o",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };

    const response = await axios.post(
      url,
      {
        sessionId: sessionId,
        content: content,
      },
      config,
    );
    console.log(response);

    return response.data.content; // Adjust this according to the actual response structure
  } catch (error) {
    console.error("Error posting message:", error);
    return null;
  }
};

export default postMessage;
