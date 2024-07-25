import { useState, useEffect } from "react";
import { SidebarItem } from "../shared/SidebarItem";
import { PiCirclesThree } from "react-icons/pi";
import { RxReload } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import axios from "axios";

export const useSidebarData = () => {
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
        const url = `https://firm-gently-ladybird.ngrok-free.app/api/chat/sessions`;
        const config = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4MjM3NjEsImV4cCI6MTcyMTgyNzM2MX0.B5HkVCMPRqespk9dIE-pohEpA1ApOgJ9kn-Zrg2oBy8",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        };
        const response = await axios.get(url, config); // Replace with your API endpoint
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
        // TODO: FOR TESTING
        const mostRecentSessionId = "errored";
        setSidebarData((prevData) =>
          prevData.map((item) =>
            item.title === "Design"
              ? { ...item, path: `/product/chat/${mostRecentSessionId}` }
              : item,
          ),
        );

        console.error("Error fetching sessions:", error);
      }
    };

    fetchMostRecentSession();
  }, []);

  return sidebarData;
};
