import React from "react";
import "../styles/ProgressCard.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

export default function ProgressCard() {
  return (
    <div className="progress-card">
      <div className="card-text">Net Profit</div>
      <div className="card-value">
        <span className="value-num">$6759.25</span>
        <div
          className="circular-progress-bar"
          style={{ width: 150, height: 150 }}
        >
          <CircularProgressbarWithChildren
            value={66}
            styles={buildStyles({
              pathColor: "#7395ff",
              textColor: "#7395ff",
              trailColor: "#293368",
            })}
          >
            <div
              style={{
                fontSize: 15,
                marginTop: -5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <strong>66%</strong>
              <strong>Goal Completed</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <span className="percentage-change arrow-up">&#9650; 3%</span>
      </div>
    </div>
  );
}
