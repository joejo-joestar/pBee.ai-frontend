import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext"; // Import your AuthContext

export const useCollections = () => {
  const { currentUser } = useAuth(); // Get the current user from AuthContext
  const [collections, setCollections] = useState<
    { collectionName: string; logo: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCollections = async () => {
    if (!currentUser) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const token = await currentUser.getIdToken();
      const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/collections/logos`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };

      const response = await axios.get<
        { collectionName: string; logo: string }[]
      >(url, config);

      console.log("API response:", response.data);

      if (Array.isArray(response.data)) {
        setCollections(response.data);
      } else {
        throw new Error("Response data is not an array");
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
      setError("Failed to fetch collections.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [currentUser]); // Depend on currentUser to refetch if it changes

  return { collections, loading, error, fetchCollections };
};
