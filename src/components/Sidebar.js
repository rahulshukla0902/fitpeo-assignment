import React, { useState } from "react";
import "../styles/Sidebar.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Sidebar() {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  return (
    <div className="sidebar">
      <div>
        <div className={`sidebar-icon ${selectedIcon === "Home" ? "selected" : ""}`}
          onClick={() => setSelectedIcon("Home")}>
          {selectedIcon === "Home" ? (<HomeSharpIcon />) : (<HomeOutlinedIcon />)}
        </div>

        <div className={`sidebar-icon ${selectedIcon === "Statistics" ? "selected" : ""}`}
          onClick={() => setSelectedIcon("Statistics")}>
          {selectedIcon === "Statistics" ? (<AssessmentIcon />) : (<AssessmentOutlinedIcon />)}
        </div>

        <div className={`sidebar-icon ${selectedIcon === "Tasks" ? "selected" : ""}`}
          onClick={() => setSelectedIcon("Tasks")}>
          {selectedIcon === "Tasks" ? (<AssignmentTurnedInIcon />) : (<AssignmentTurnedInOutlinedIcon />)}
        </div>

        <div
          className={`sidebar-icon ${selectedIcon === "Wallet" ? "selected" : ""}`}
          onClick={() => setSelectedIcon("Wallet")}>
          {selectedIcon === "Wallet" ? (<AccountBalanceWalletIcon />) : (<AccountBalanceWalletOutlinedIcon />)}
        </div>

        <div
          className={`sidebar-icon ${selectedIcon === "Cart" ? "selected" : ""}`}
          onClick={() => setSelectedIcon("Cart")}>
          {selectedIcon === "Cart" ? (<LocalMallIcon />) : (<LocalMallOutlinedIcon />)}
        </div>
      </div>

      <div className="sidebar-icon">
        <LogoutOutlinedIcon />
      </div>
    </div>
  );
}
