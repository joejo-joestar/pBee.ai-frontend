import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Separator } from "@/assets/Separator";
import toggleFavoriteStatus from "./toggleFavoriteStatus";
import fetchChats from "./fetchChats";
import { useAuth } from "@/contexts/AuthContext";

const History: FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByNewest, setSortByNewest] = useState(true);
  const [chats, setChats] = useState<any[]>([]);

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken().then(setToken);
    }
  }, [currentUser]);

  // Fetch chat history when the component mounts
  useEffect(() => {
    const getChats = async () => {
      if (token) {
        const chatsData = await fetchChats(token);
        setChats(
          chatsData.map((chat: { updatedAt: string | number | Date }) => ({
            ...chat,
            updatedAt: new Date(chat.updatedAt),
          })),
        );
      }
    };

    getChats();
  }, [token]);

  const handleToggleSort = () => {
    setSortByNewest((prev) => !prev);
    const sortedChats = [...chats].sort((a, b) =>
      sortByNewest
        ? b.updatedAt.getTime() - a.updatedAt.getTime()
        : a.updatedAt.getTime() - b.updatedAt.getTime(),
    );
    setChats(sortedChats);
  };

  const handleFavoriteChat = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const chat = chats.find((chat) => chat.sessionId === id);
    if (!chat) return;

    const updatedChat = { ...chat, isFavorite: !chat.isFavorite };
    const response = await toggleFavoriteStatus(
      id,
      updatedChat.isFavorite,
      token,
    );
    if (response) {
      setChats((prevChats) =>
        prevChats.map((chat) => (chat.sessionId === id ? updatedChat : chat)),
      );
    }
  };

  // const handleDeleteChat = (id: string, e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setChats((prevChats) => prevChats.filter((chat) => chat.sessionId !== id));
  // };

  // const handleClearHistory = () => {
  //   setChats([]);
  // };

  const handleChatClick = (id: string) => {
    navigate(`/product/chat/${id}`);
  };

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-screen bg-dark p-5">
      <div className="ml-64 flex w-full flex-col gap-5 bg-dark">
        <h2 className="font-display text-2xl">History</h2>
        <Separator />

        <div className="flex w-1/2 items-center gap-5">
          <input
            key="search"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sms h-12 w-48 flex-1 rounded-lg border p-2"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleSort}
              className={`h-12 w-24 rounded-lg border border-gray-300 p-2 transition ${
                sortByNewest ? "bg-cardColor text-white" : "bg-transparent"
              } text-xs transition hover:${
                sortByNewest ? "bg-cardColor/50" : "bg-gray-100"
              }`}
            >
              {sortByNewest ? "Newest" : "Oldest"}
            </button>

            {/* Clear History */}
            {/* <button
              onClick={handleClearHistory}
              className="h-12 w-24 rounded-lg border border-gray-300 p-2 text-xs transition hover:bg-gray-300 hover:text-black"
            >
              Clear History
            </button> */}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {filteredChats.map((session) => (
            <div
              className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-tabContainer p-2 text-left transition hover:bg-tabContainer/50"
              key={session.sessionId}
              onClick={() => handleChatClick(session.sessionId)}
            >
              <div className="flex items-center">
                <span>{session.title}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleFavoriteChat(session.sessionId, e)}
                  className="p-2"
                >
                  {session.isFavorite ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <FaRegStar className="text-gray-500" />
                  )}
                </button>

                {/* <button
                  onClick={(e) => handleDeleteChat(chat.sessionId, e)}
                  className="p-2"
                >
                  <FaTrash className="text-red-500 transition hover:text-red-600" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
