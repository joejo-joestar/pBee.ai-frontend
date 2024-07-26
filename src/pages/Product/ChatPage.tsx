import React from "react";
import { useParams } from "react-router-dom";
import Canvas from "@/components/Canvas";
import Chatbar from "@/components/Chatbar";
import CanvasBar from "@/components/CanvasBar";

const ChatPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId?: string | undefined }>();

  return (
    <>
      <Canvas sessionId={sessionId} />
      <CanvasBar sessionId={sessionId} />
      <Chatbar sessionId={sessionId} />
    </>
  );
};

export default ChatPage;
