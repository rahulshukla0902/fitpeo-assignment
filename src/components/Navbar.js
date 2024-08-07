import React from "react";
import "../styles/Navbar.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

export default function Navbar() {
  return (
    <div className="navbar">
      <input type="text" className="search-input" placeholder="Search" />
      <div className="header-icons">
        <div className="icon">
          <EmailOutlinedIcon />
        </div>
        <div className="icon">
          <SettingsOutlinedIcon />
        </div>
        <div className="icon highlight">
          <NotificationsActiveIcon/>
        </div>
        <div className="profile-pic">
          <PersonSharpIcon />
        </div>
      </div>
    </div>
  );
}
