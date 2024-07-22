import { FC, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import { SidebarItem } from "../shared/SidebarItem";
import { CiStar } from "react-icons/ci";
import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomizeModal from "../CustomizeModal";

const SidebarNav = styled.div`
  height: 100vh;
  // position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const SidebarWrap = styled.div`
  flex-grow: 1;
`;

const TopButton = styled.button`
  height: 3rem;
  margin: 1rem;
  background-color: #786ebb;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #5a36c7;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
`;

const Subheader = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #e8e6f5;
  border: 1px solid #ccc;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileName = styled.span`
  font-size: 0.875rem; /* Slightly smaller font size */
`;

const ProfileSubtext = styled.span`
  font-size: 0.75rem; /* Smaller font size for subtext */
  color: grey;
`;

const ProfileSettings = styled.div`
  cursor: pointer;
`;

const Sidebar: FC = () => {
  const navigate = useNavigate();

  const [showCustomizeModal, setShowCustomizeModal] = useState<boolean>(false);

  const handleNewPosterClick = () => {
    setShowCustomizeModal(true);
    navigate("/product/new-poster");
  };

  const handleProfileClick = () => {
    navigate("/product/profile");
  };

  return (
    <>
      <CustomizeModal
        isVisible={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
      />
      <IconContext.Provider value={{ color: "#000" }}>
        <SidebarNav className="min-w-64 max-w-64 bg-productDark px-3 text-purple-300">
          <TopButton onClick={handleNewPosterClick}>New Poster</TopButton>
          <SidebarWrap>
            <div className="flex flex-col gap-2">
              {SidebarData.map((item, index) => (
                <Submenu item={item} key={index} />
              ))}
            </div>
            <Separator />
            <Subheader className="text-lavender70">Favorites</Subheader>
            <Submenu
              item={{
                title: "Favorite 1",
                path: "/product/favorites/1",
                icon: <CiStar style={{ color: "white" }} />,
              }}
              isFavorite
            />
            <Submenu
              item={{
                title: "Favorite 2",
                path: "/product/favorites/2",
                icon: <CiStar style={{ color: "white" }} />,
              }}
              isFavorite
            />
          </SidebarWrap>
          <ProfileContainer onClick={handleProfileClick}>
            <ProfileInfo>
              <ProfileName>User Name</ProfileName>
              <ProfileSubtext>Enterprise</ProfileSubtext>
            </ProfileInfo>
            <ProfileSettings>
              <FaCog size={16} />
            </ProfileSettings>
          </ProfileContainer>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
