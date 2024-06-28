// AI Chatbar component
import React, { useState, useEffect } from "react";

interface ChatMessage {
  sender: "user" | "ai";
  message: string;
}

const AIChatbar: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const sendMessage = async (message: string) => {
    const trimmedMessage = message.trim(); // Remove leading/trailing whitespace
    if (!trimmedMessage) {
      return; // Don't send empty message
    }

    setUserInput("");
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", message: trimmedMessage },
    ]);

    // Simulate sending the message to your AI server (replace with actual logic)
    const response = await fetch("/your/ai/endpoint", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const responseData = await response.json();
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "ai", message: responseData.message },
    ]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage(userInput);
    }
  };

  useEffect(() => {
    // Handle initial greetings or any setup logic here (optional)
  }, []);

  return (
    <div className="div h-auto w-1/4 bg-gray-200 shadow-lg">
      <div className="inset-x-0 bottom-0 px-4 py-4">
        <div className="flex flex-col space-y-2 overflow-y-auto">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex w-full items-center rounded-lg p-2 ${
                message.sender === "user"
                  ? "bg-gray-300 text-black"
                  : "bg-blue-500 text-white"
              } max-w-[66.66%]`} // Set max width to 2/3rds of outer div
            >
              <span className="flex-grow">{message.message}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none"
            placeholder="Type your message"
          />
          <button
            className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => sendMessage(userInput)}
            disabled={!userInput.trim()} // Disable button if trimmed message is empty
          >
            s
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbar;
