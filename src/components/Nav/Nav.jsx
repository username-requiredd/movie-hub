import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import "./nav.css"
const Nav = () => {
  const active = {
    color: "red",
  };
  //   const [isActive, setIsactive] = useState(false);
  return (
    <>
      <div className="bottom-nav">
        <div className="nav-icons mx-auto">
          <ul className="icon-list">
            <li
            //   onClick={() => setIsactive(true)}
            //   className={isActive ? "active" : ""}
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : "")}
              >
                <HomeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/list">
                <SmartDisplayOutlinedIcon
                //   className={isActive ? "active" : ""}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmarks">
                <BookmarkBorderOutlinedIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <PermIdentityOutlinedIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
