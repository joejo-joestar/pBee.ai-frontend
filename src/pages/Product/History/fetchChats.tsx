import axios from "axios";

const fetchChats = async (token: string) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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
