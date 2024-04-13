import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  const active = {
    color: "red",
  };
  return (
    <>
      <div className="bottom-nav">
        <div className="nav-icons mx-auto">
          <ul className="icon-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                <HomeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                <SmartDisplayOutlinedIcon
                //   className={isActive ? "active" : ""}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                <BookmarkBorderOutlinedIcon />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
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
