import React from "react";
// import "./pageadmin.css";
// import "./list.css";
// import "./pageadmin.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./containerstyle.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { Outlet, Link } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { Switch } from "@mui/material";
function Container({ children }) {
  return (
    <div>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt=""></img>
          </div>

          <span className="logo_name">SNC BLS</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <Link to="/">
                <HomeRoundedIcon
                  style={{ color: "lightgray" }}
                ></HomeRoundedIcon>

                <span className="link-name">Dahsboard</span>
              </Link>
            </li>
            <li>
              <Link to="/Content">
                <ContentCopyRoundedIcon
                  style={{ color: "lightgray" }}
                ></ContentCopyRoundedIcon>
                <span className="link-name">Content</span>
              </Link>
            </li>
            <li>
              <Link to="/Content">
                <ContentCopyRoundedIcon
                  style={{ color: "lightgray" }}
                ></ContentCopyRoundedIcon>{" "}
                <span className="link-name">Analytics</span>
              </Link>
            </li>
            <li>
              <Link to="/Content">
                <ContentCopyRoundedIcon
                  style={{ color: "lightgray" }}
                ></ContentCopyRoundedIcon>{" "}
                <span className="link-name">Analytics</span>
              </Link>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <a href="#">
                <LogoutRoundedIcon
                  style={{ color: "lightgray" }}
                ></LogoutRoundedIcon>
                <span className="link-name">Logout</span>
              </a>
            </li>

            <li className="mode">
              <a href="#">
                <DarkModeRoundedIcon
                  style={{ color: "lightgray" }}
                ></DarkModeRoundedIcon>
                <span className="link-name">Dark Mode</span>
              </a>

              <div className="mode-toggle">
                {/* <span className="switch"></span> */}
                <Switch />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />

      {/* {props} */}
      {children}
    </div>
  );
}

export default Container;
