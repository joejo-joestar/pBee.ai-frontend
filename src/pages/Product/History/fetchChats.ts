import axios from "axios";

const fetchChats = async () => {
  try {
    const url = `https://firm-gently-ladybird.ngrok-free.app/api/`;
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4MjM3NjEsImV4cCI6MTcyMTgyNzM2MX0.B5HkVCMPRqespk9dIE-pohEpA1ApOgJ9kn-Zrg2oBy8",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history: ", error);
    return [];
  }
};

export default fetchChats;
