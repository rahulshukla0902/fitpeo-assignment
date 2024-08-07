import React from "react";
import "../styles/InfoCard.css";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function InfoCard() {
  return (
    <div className="info-card">
      <div className="info-card-list">
        <div className="info-card-item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="info-card-icon goal"><FlagOutlinedIcon /></span>
            <span className="info-card-item-text">Goals</span>
          </div>
          <span className="info-card-icon small">&#9658;</span>
        </div>
        <div className="info-card-item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="info-card-icon popular-dishes"><LunchDiningOutlinedIcon /></span>
            <span className="info-card-item-text">Popular Dishes</span>
          </div>
          <span className="info-card-icon small">&#9658;</span>
        </div>
        <div className="info-card-item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="info-card-icon menu"><MenuBookOutlinedIcon /></span>
            <span className="info-card-item-text">Menus</span>
          </div>
          <span className="info-card-icon small">&#9658;</span>
        </div>
      </div>
    </div>
  );
}
