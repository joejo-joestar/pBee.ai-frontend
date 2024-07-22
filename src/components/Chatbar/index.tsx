import { FC, useState, FormEvent } from "react";
import styled from "styled-components";
import { IoSend, IoPersonCircle } from "react-icons/io5";

const ChatbarNav = styled.div`
  width: 325px;
  height: 100vh;
  // position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

const ChatbarWrap = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
`;

const MessageInputContainer = styled.form`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 100px;
  margin-right: 10px;
  background-color: #e8e6f5;
`;

const SendButton = styled.button`
  padding: 16px;
  background-color: #786ebb;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #5a36c7;
  }
`;

const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-direction: ${({ isUser }) => (isUser ? "row-reverse" : "row")};
`;

const ProfileIcon = styled.div<{ isUser: boolean }>`
  margin: ${({ isUser }) => (isUser ? "0 0 0 10px" : "0 10px 0 0")};
  display: flex;
  align-items: center;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  background-color: ${({ isUser }) => (isUser ? "#dbd5f5" : "#e6e8f5")};
  border-radius: 20px;
  padding: 15px;
  max-width: 70%;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const Chatbar: FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [],
  );
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessages = [
        ...messages,
        { text: inputValue, isUser: true },
        { text: "The model gives a response.", isUser: false },
      ];
      setMessages(newMessages);
      setInputValue("");
    }
  };

  return (
    <ChatbarNav className="bg-productDark">
      <ChatbarWrap>
        {messages.map((message, index) => (
          <MessageContainer key={index} isUser={message.isUser}>
            {!message.isUser && (
              <ProfileIcon isUser={message.isUser}>
                <IoPersonCircle size={30} />
              </ProfileIcon>
            )}
            <MessageBubble className="text-slate-500" isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          </MessageContainer>
        ))}
      </ChatbarWrap>
      <MessageInputContainer onSubmit={handleFormSubmit}>
        <MessageInput
          className="text-slate-500"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <SendButton type="submit">
          <IoSend />
        </SendButton>
      </MessageInputContainer>
    </ChatbarNav>
  );
};

export default Chatbar;
