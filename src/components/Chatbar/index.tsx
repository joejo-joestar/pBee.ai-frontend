import { FC, useState, FormEvent } from "react";
import { IoSend, IoPersonCircle } from "react-icons/io5";

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
    <div className="fixed right-0 top-0 flex h-screen w-96 flex-col bg-productDark">
      <div className="flex-grow overflow-y-auto p-2">
        {messages.map((message, index) => (
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
        ))}
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
          className="flex size-12 items-center justify-center rounded-full bg-cardColor text-white transition hover:shadow-cardGlowEffect"
        >
          <IoSend className="flex items-center justify-center" size={24} />
        </button>
      </form>
    </div>
  );
};

export default Chatbar;
