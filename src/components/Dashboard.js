import React from "react";
import "../styles/Dashboard.css";
import { Card, Orders, Activity, ProgressCard, InfoCard, Feedback } from "../components";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header-text">Dashboard</div>
      <div className="content">
        <div className="left-panel">
          <div className="progress-cards">
            <Card name="total-orders" />
            <Card name="total-delivered" />
            <Card name="total-cancelled" />
            <Card name="total-revenue" />
          </div>
          <div className="info-tabs">
            <Activity />
            <Orders />
          </div>
        </div>
        <div className="right-panel">
          <div className="right-panel-cards">
            <ProgressCard />
            <InfoCard />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
}
