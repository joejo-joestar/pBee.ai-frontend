import React, { FC, useState, useEffect, FormEvent, useRef } from "react";
import { IoSend, IoPersonCircle } from "react-icons/io5";
import { useAuth } from "@/contexts/AuthContext";
import fetchMessages from "./fetchMessages";
import postMessage from "./postMessage";
import Spinner from "../shared/Spinner";

interface ChatbarProps {
  sessionId: string | undefined;
}

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbar: FC<ChatbarProps> = ({ sessionId }) => {
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken().then(setToken);
    }
  }, [currentUser]);

  useEffect(() => {
    const loadMessages = async () => {
      if (!token) return;
      try {
        setIsLoading(true);
        const fetchedMessages = await fetchMessages(sessionId, token);
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [sessionId, token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      try {
        const responseMessage = await postMessage(sessionId, inputValue, token);
        if (responseMessage) {
          const botMessage = { text: responseMessage, isUser: false };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
      } catch (error) {
        console.error("Error posting message:", error);
      } finally {
        setInputValue("");
      }
    }
  };

  return (
    <div className="fixed right-0 top-0 flex h-screen w-96 flex-col bg-productDark">
      <div className="flex-grow overflow-y-auto p-2">
        {isLoading ? (
          <div className="justify-center">
            <Spinner style={"size-32"} />
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 flex items-start ${
                message.isUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {!message.isUser && (
                <div className="mx-2 flex items-center">
                  <IoPersonCircle size={30} />
                </div>
              )}
              <div
                className={`max-w-3/4 rounded-lg p-4 font-normal ${
                  message.isUser
                    ? "self-end bg-cardColor/50 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex items-center justify-center gap-2 p-3"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="flex w-4/5 rounded-lg border border-gray-300 p-3"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-cardColor text-white transition hover:shadow-cardGlowEffect"
        >
          <IoSend className="flex items-center justify-center" size={24} />
        </button>
      </form>
    </div>
  );
};

export default Chatbar;
