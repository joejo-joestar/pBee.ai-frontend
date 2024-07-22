import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../shared/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
  isFavorite?: boolean;
};

const SidebarLink = styled(NavLink)<{ isFavorite?: boolean }>`
  height: ${({ isFavorite }) => (isFavorite ? "2rem" : "2.5rem")};
  font-size: ${({ isFavorite }) => (isFavorite ? "0.875rem" : "1rem")};
  padding: ${({ isFavorite }) => (isFavorite ? "0.5rem" : "1rem")};
  color: white;
  border-radius: 10px;

  &:hover {
    background-color: #413c73;
    border: 2px solid #5b4ead;
  }

  &.active {
    background-color: #413c73;
    border: 2px solid #5b4ead;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 0.5rem;
`;

const DropdownLink = styled(NavLink)<{ isFavorite?: boolean }>`
  height: ${({ isFavorite }) => (isFavorite ? "2rem" : "2.5rem")};
  font-size: ${({ isFavorite }) => (isFavorite ? "0.875rem" : "1rem")};
  padding-left: ${({ isFavorite }) => (isFavorite ? "1rem" : "2rem")};

  &:hover {
    background-color: #786ebb;
  }

  &.active {
    background-color: #786ebb;
  }
`;

const Submenu: FC<SidebarLinkProps> = ({ item, isFavorite }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const isActive = (isActive: any) =>
    isActive ? "active border-cardColor" : "";

  return (
    <>
      {/* Main Page Links */}
      <SidebarLink
        to={item.path}
        onClick={showSubnav}
        className={`flex flex-row justify-start border border-transparent transition-all duration-75 ${isActive}`}
        isFavorite={isFavorite}
      >
        <div className="flex items-center">
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}
        </div>
      </SidebarLink>

      {/* For Favorites */}
      {subnav &&
        item?.subnav?.map(
          (subnavItem: { path: any; icon: any; title: any }, index: any) => (
            <DropdownLink
              to={subnavItem.path}
              key={index}
              className={isActive}
              isFavorite={isFavorite}
            >
              {subnavItem.icon}
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          ),
        )}
    </>
  );
};

export default Submenu;
