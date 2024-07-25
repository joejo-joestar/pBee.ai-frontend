import { useState, useEffect } from "react";
import axios from "axios";

export const useCollections = () => {
  const [collections, setCollections] = useState<
    { collectionName: string; logo: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCollections = async () => {
    setLoading(true);
    try {
      const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/collections/logos`;
      const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4OTY0ODQsImV4cCI6MTcyMTkwMDA4NH0.atHOFna6FKJcx_vWl7K0GoTVOAiFd4gb5VPmB7khYJ4",
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
  }, []);

  return { collections, loading, error, fetchCollections };
};
