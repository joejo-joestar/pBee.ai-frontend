import { useState, useEffect } from "react";
import { SidebarItem } from "../shared/SidebarItem";
import { PiCirclesThree } from "react-icons/pi";
import { RxReload } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import axios from "axios";

export const useSidebarData = (token: string) => {
  const [sidebarData, setSidebarData] = useState<SidebarItem[]>([
    {
      title: "Design",
      path: "/product/chat", // Placeholder path, will be updated
      icon: <HiOutlinePencilSquare color="white" />,
    },
    {
      title: "Collections",
      path: "/product/collections",
      icon: <PiCirclesThree color="white" />,
    },
    {
      title: "History",
      path: "/product/history",
      icon: <RxReload color="white" />,
    },
  ]);

  useEffect(() => {
    const fetchMostRecentSession = async () => {
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
        const sessions = response.data;
        if (sessions.length > 0) {
          sessions.sort(
            (
              a: { updatedAt: string | number | Date },
              b: { updatedAt: string | number | Date },
            ) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          );
          const mostRecentSessionId = sessions[0].sessionId;
          setSidebarData((prevData) =>
            prevData.map((item) =>
              item.title === "Design"
                ? { ...item, path: `/product/chat/${mostRecentSessionId}` }
                : item,
            ),
          );
        }
      } catch (error) {
        console.error("Error fetching sessions:", error);
        setSidebarData((prevData) =>
          prevData.map((item) =>
            item.title === "Design"
              ? { ...item, path: `/product/chat/errored` }
              : item,
          ),
        );
      }
    };

    fetchMostRecentSession();
  }, [token]);

  return sidebarData;
};
