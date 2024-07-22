import { FC, useState } from "react";
import styled from "styled-components";
import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100vh;
`;

const HistoryBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 1050px;
  height: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HistoryHeading = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin-bottom: 10px;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#786ebb" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#333")};
  cursor: pointer;
  font-size: 12px;
  margin-left: 10px;

  &:hover {
    background-color: ${({ active }) => (active ? "#5a36c7" : "#f0f0f0")};
  }
`;

const ClearHistoryButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ChatInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ChatName = styled.span`
  margin-right: 10px;
`;

const ChatActions = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    color: #786ebb;
  }
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const History: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByNewest, setSortByNewest] = useState(true);
  const [chats, setChats] = useState([
    { id: 1, name: "Chat 1", date: new Date("2023-07-01"), favorite: false },
    { id: 2, name: "Chat 2", date: new Date("2023-07-02"), favorite: false },
    { id: 3, name: "Chat 3", date: new Date("2023-07-03"), favorite: false },
  ]);

  const handleClearHistory = () => {
    setChats([]);
  };

  const handleToggleSort = () => {
    setSortByNewest((prev) => !prev);
    const sortedChats = [...chats].sort((a, b) =>
      sortByNewest
        ? b.date.getTime() - a.date.getTime()
        : a.date.getTime() - b.date.getTime(),
    );
    setChats(sortedChats);
  };

  const handleFavoriteChat = (id: number) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, favorite: !chat.favorite } : chat,
      ),
    );
  };

  const handleDeleteChat = (id: number) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <HistoryContainer className="bg-green-600">
      <HistoryBox>
        <HistoryHeading>History</HistoryHeading>
        <SearchBarContainer>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ToggleContainer>
            <ToggleButton active={sortByNewest} onClick={handleToggleSort}>
              {sortByNewest ? "Newest" : "Oldest"}
            </ToggleButton>
          </ToggleContainer>
          <ClearHistoryButton onClick={handleClearHistory}>
            Clear History
          </ClearHistoryButton>
        </SearchBarContainer>
        {filteredChats.map((chat) => (
          <ChatItem key={chat.id}>
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
            </ChatInfo>
            <ChatActions>
              <IconContainer>
                <FavoriteButton onClick={() => handleFavoriteChat(chat.id)}>
                  {chat.favorite ? <FaStar /> : <FaRegStar />}
                </FavoriteButton>
                <IconButton onClick={() => handleDeleteChat(chat.id)}>
                  <FaTrash />
                </IconButton>
              </IconContainer>
            </ChatActions>
          </ChatItem>
        ))}
      </HistoryBox>
    </HistoryContainer>
  );
};

export default History;
