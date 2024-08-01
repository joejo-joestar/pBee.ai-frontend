import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Spinner from "../shared/Spinner";
import Poster from "@/assets/poster.svg";

type Props = {
  sessionId?: string;
};

const Canvas = ({ sessionId }: Props) => {
  const { currentUser, loading: authLoading } = useAuth();
  const [svgData, setSvgData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchSvgData = async (token: string) => {
      try {
        const url = `https://outgoing-termite-roughly.ngrok-free.app/api/chat/session-info/${sessionId}`;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        };

        const response = await axios.get(url, config);
        const poster = response.data.poster;

        setSvgData(Poster);
        if (poster.status === "active") {
          setSvgData(poster.posterSvg);
          setLoading(false);
          clearInterval(interval); // Stop polling once SVG is received
        }
      } catch (error) {
        console.error("Error fetching SVG data:", error);
      }
    };

    const startPolling = async () => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        interval = setInterval(() => fetchSvgData(token), 120000); // Poll every 2 minutes
        fetchSvgData(token);
        // TODO: Delete this line once sockets work.
      } else {
        console.error("User not authenticated 🔥");
      }
    };

    if (sessionId && !authLoading) {
      startPolling();
    }

    return () => clearInterval(interval);
  }, [sessionId, currentUser, authLoading]);

  return (
    <div className="absolute left-1/2 top-0 flex h-screen w-full -translate-x-1/2 transform items-center justify-center overflow-clip bg-dark">
      {loading ? (
        <div>
          <Spinner style={"size-32"} />
        </div>
      ) : (
        // NOTE: Debugging
        // <img
        //   className="flex w-full max-w-[512px] items-center justify-center"
        //   src={Poster}
        //   alt="Poster"
        // />
        <div
          className="flex w-full max-w-[512px] items-center justify-center"
          dangerouslySetInnerHTML={{ __html: Poster || "" }}
        />
      )}
    </div>
  );
};

export default Canvas;
