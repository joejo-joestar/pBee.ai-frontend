import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarItem } from "../shared/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
  isFavorite?: boolean;
};

const Submenu: FC<SidebarLinkProps> = ({ item, isFavorite }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <NavLink
        to={item.path}
        onClick={showSubNav}
        className={({ isActive }) =>
          `flex items-center justify-between rounded-lg transition ${
            isFavorite ? "h-8 p-2 text-sm" : "h-10 p-4 text-base"
          } ${isActive ? "rounded-lg bg-cardColor hover:bg-cardColor" : ""} hover:bg-cardColor/50`
        }
      >
        {/* Content */}
        <div className="flex items-center">
          {item.icon}
          <span className="ml-2">{item.title}</span>
        </div>
        <div>
          {item?.subNav && subNav ? item?.iconOpened : item?.iconClosed}
        </div>
      </NavLink>

      {/* Something */}
      {subNav &&
        item?.subNav?.map((subNavItem, index) => (
          <NavLink
            to={subNavItem.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center justify-start ${
                isFavorite ? "h-8 pl-4 text-sm" : "h-10 pl-8 text-base"
              } text-white no-underline ${
                isActive ? "bg-indigo-700" : "bg-indigo-600"
              } hover:bg-indigo-800`
            }
          >
            <span>{subNavItem.title}</span>
          </NavLink>
        ))}
    </>
  );
};

export default Submenu;
