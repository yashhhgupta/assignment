import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import FitbitIcon from "@mui/icons-material/Fitbit";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <FitbitIcon sx={{fontSize:"30px"}}/>
        &nbsp; Veritas
      </div>
      <nav className="nav">
        <h4>Main Menu</h4>
        <ul>
          <li>
            <a href="#">
              <div className="name">
                <DashboardIcon />
                &nbsp; Dashboard
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="name">
                <GroupIcon />
                &nbsp; Users
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="name">
                <LibraryBooksIcon />
                &nbsp; Accounts
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="name">
                <BarChartIcon />
                &nbsp; Statistics
              </div>
            </a>
          </li>

          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <nav className="nav">
        <h4>Teams</h4>
        <ul>
          <li>
            <a href="#">
              <div className="name">
                <span style={{ color: "orange" }}>●</span>&nbsp; Marketing
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="name">
                <span style={{ color: "grey" }}>●</span>&nbsp; Development
              </div>
            </a>
          </li>

          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <div className="bottom">
        <ul>
          <li>
            <div className="name">
              <SettingsIcon />
              &nbsp; Settings
            </div>
          </li>
          <li>
            <div className="name">
              <LogoutIcon />
              &nbsp; Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
