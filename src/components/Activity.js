import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Activity.css";

export default function Activity() {
  const sampleData = [
    { name: "2", Value: 500 },
    { name: "8", Value: 200 },
    { name: "14", Value: 600 },
    { name: "20", Value: 500 },
    { name: "26", Value: 250 },
    { name: "32", Value: 500 },
    { name: "38", Value: 700 },
    { name: "44", Value: 400 },
    { name: "50", Value: 300 },
    { name: "56", Value: 450 },
    { name: "62", Value: 550 },
    { name: "68", Value: 700 },
    { name: "74", Value: 650 },
    { name: "80", Value: 750 },
    { name: "86", Value: 800 },
    { name: "92", Value: 650 },
    { name: "98", Value: 700 },
  ];

  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx="50" 
        ry="10" 
      />
    );
  };

  return (
    <div className="activity">
      <span className="activity-title">Activity</span>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sampleData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Value" fill="#7095ff" shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
