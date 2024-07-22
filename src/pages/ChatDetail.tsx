import { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Chatbar from "@/components/Chatbar";
import Canvas from "@/components/Canvas";

const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ChatDetailBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ChatDetailContainer>
      <ChatDetailBox>
        <h2>Chat Detail for Chat {id}</h2>
        <Canvas />
        <Chatbar />
      </ChatDetailBox>
    </ChatDetailContainer>
  );
};

export default ChatDetail;
