import { FC, useState } from "react";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";
import Collections from "./Collections";
import Chatbar from "@/components/Chatbar";
import Canvas from "@/components/Canvas";
import CustomizeModal from "@/components/CustomizeModal";

const NewPosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WhiteBox = styled.div`
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

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const OptionButton = styled.button`
  padding: 20px;
  background-color: transparent;
  color: #333;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition:
    border-color 0.3s,
    color 0.3s;

  &:hover {
    border-color: #786ebb;
    color: #786ebb;
    background-color: #f0f0f0;
  }
`;

const NewPoster: FC = () => {
  const [showCollections, setShowCollections] = useState(false);

  const handleUseCollections = () => {
    setShowCollections(true);
  };

  return (
    <NewPosterContainer>
      {!showCollections ? (
        <>
          {/* <WhiteBox>
          <OptionsContainer>
            <OptionButton onClick={handleUseCollections}>
              Use Existing Collections
            </OptionButton>
            <OptionButton onClick={() => {}}>Add New Collection</OptionButton>
            <OptionButton onClick={() => setShowCollections(true)}>
              Continue Without Uploading
            </OptionButton>
          </OptionsContainer>
        </WhiteBox> */}
        </>
      ) : (
        <>
          {/* <Collections /> */}
          {/* <Canvas /> */}
          {/* <Chatbar /> */}
        </>
      )}
    </NewPosterContainer>
  );
};

export default NewPoster;
