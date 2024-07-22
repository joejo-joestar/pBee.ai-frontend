import { FC, useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import AssetsModal from "@/components/AssetsModal";
import UploadModal from "@/components/UploadModal";

type AssetType = {
  id: number;
  count?: number;
};

const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

const UploadBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  margin-top: 20px;
`;

const PlusButton = styled.button`
  background-color: #786ebb;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 10px;

  &:hover {
    background-color: #5a36c7;
  }
`;

const Subtext = styled.div`
  font-size: 10px;
  color: #808080;
  margin-bottom: 10px;
  word-wrap: break-word;
`;

const MainText = styled.div`
  font-size: 16px;
  color: #333;
  word-wrap: break-word;
`;

const AssetGrid = styled.div`
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  justify-items: center;
`;

const Asset = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 50%;
  background-color: #e0e0e0;
  border-radius: 10px 10px 0 0;
`;

const AssetInfo = styled.div`
  width: 100%;
  height: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AssetName = styled.div`
  font-size: 14px;
  color: #808080;
  margin-bottom: 5px;
`;

const AssetCount = styled.div`
  font-size: 12px;
  color: #b0b0b0;
`;

const Collections: FC = () => {
  const [assets, setAssets] = useState<AssetType[]>([]);
  const [showAssetsModal, setShowAssetsModal] = useState<boolean>(false);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const handleAddAsset = () => {
    setShowUploadModal(true);
    const newAssetId = assets.length + 1;
    const randomCount = Math.floor(Math.random() * 10) + 1;
    setAssets([...assets, { id: newAssetId, count: randomCount }]);
  };

  return (
    <>
      <AssetsModal
        isVisible={showAssetsModal}
        onClose={() => setShowAssetsModal(false)}
        collectionName={"josephtest1"}
      />
      <CollectionsContainer className="min-w-[75%] overflow-y-auto">
        <AssetGrid className="flex flex-row flex-wrap">
          {assets.map((asset) => (
            <Asset onClick={() => setShowAssetsModal(true)} key={asset.id}>
              <PlaceholderImage />
              <AssetInfo>
                <AssetName>Brand Assets {asset.id}</AssetName>
                {asset.count && (
                  <AssetCount>{asset.count} assets uploaded</AssetCount>
                )}
              </AssetInfo>
            </Asset>
          ))}
          <UploadModal
            isVisible={showUploadModal}
            onClose={() => setShowUploadModal(false)}
          />
          <UploadBox>
            <PlusButton onClick={handleAddAsset}>
              <FaPlus />
            </PlusButton>
            <Subtext>
              Collections helps Placard create consistent designs with your
              brand or style.
            </Subtext>
            <MainText>Upload Brand Assets</MainText>
          </UploadBox>
        </AssetGrid>
      </CollectionsContainer>
    </>
  );
};

export default Collections;
