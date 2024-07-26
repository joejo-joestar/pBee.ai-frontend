import axios from "axios";

const toggleFavoriteStatus = async (sessionId: string, isFavorite: boolean) => {
  try {
    const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/sessions/${sessionId}/favorite`;
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5OCJ9LCJpYXQiOjE3MjE5MjMzNzksImV4cCI6MTcyMTk2NjU3OX0.nSrQjhDOSVKUSgohpGD6ncz-fi6Bo1saRUANlzHQj_o`,
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
