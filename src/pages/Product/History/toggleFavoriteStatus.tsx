import axios from "axios";

const toggleFavoriteStatus = async (
  sessionId: string,
  isFavorite: boolean,
  token: string,
) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions/${sessionId}/favorite`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.patch(url, { isFavorite: isFavorite }, config);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error toggling favorite status:", response.data);
      return null;
    }
  } catch (error) {
    console.error("Error toggling favorite status:", error);
    return null;
  }
};

export default toggleFavoriteStatus;
