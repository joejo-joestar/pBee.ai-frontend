import React, { FC, useState, useEffect, FormEvent, useRef } from "react";
import { IoSend, IoPersonCircle } from "react-icons/io5";
import fetchMessages from "./fetchMessages"; // Make sure the path is correct for your project structure
import postMessage from "./postMessage"; // You'll need to create this function to handle posting messages

interface ChatbarProps {
  sessionId: string;
}

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbar: FC<ChatbarProps> = ({ sessionId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setIsLoading(true);
        const fetchedMessages = await fetchMessages(sessionId);

        console.log("fetchedmsg", fetchedMessages);

        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Add user message to state
      const userMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Post user message to the server
      try {
        const responseMessage = await postMessage(sessionId, inputValue);

        // Assuming postMessage returns an object with the 'content' property
        if (responseMessage) {
          const botMessage = { text: responseMessage.content, isUser: false };
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
          <div className="text-center text-white">Loading...</div>
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

              {/* Chat Bubble */}
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

      {/* Input */}
      <form
        className="flex items-center justify-center gap-2 p-3"
        onSubmit={handleFormSubmit}
      >
        {/* Chat Field */}
        <input
          type="text"
          className="flex w-4/5 rounded-lg border border-gray-300 bg-indigo-50 p-3"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />

        {/* Send Button */}
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
