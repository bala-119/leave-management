import React from "react";
import "./LeaveBalance.css";

const LeaveBalance = ({
  title,
  availableDays,
  available,
  consumed,
  accrued,
  quota,
  color,
  percentage = 285 // Defaulting to a value that looks good in the ring
}) => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  // Convert 0-360 degrees to stroke-dashoffset
  const offset = circumference - (percentage / 360) * circumference;

  return (
    <div className="leave-card">
      <div className="header">
        <h3 className="title">{title}</h3>
        <button className="info-icon">i</button>
      </div>

      <div className="progress-wrapper">
        <svg className="progress-svg" width="130" height="130">
          <circle
            className="progress-bg"
            cx="65"
            cy="65"
            r={radius}
            strokeWidth="8"
          />
          <circle
            className="progress-bar"
            cx="65"
            cy="65"
            r={radius}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke={color}
            strokeLinecap="round"
            transform="rotate(-90 65 65)"
          />
        </svg>
        <div className="inner-circle">
          <h1 style={{ color }}>{availableDays}</h1>
          <p>AVAILABLE</p>
        </div>
      </div>

      <div className="legend">
        <div className="legend-row">
          <div className="left">
            <span className="dot" style={{ background: color }}></span>
            <span className="label">Available</span>
          </div>
          <span className="value">{available}</span>
        </div>

        <div className="legend-row">
          <div className="left">
            <span className="dot consumed" style={{ background: `${color}33` }}></span>
            <span className="label">Consumed</span>
          </div>
          <span className="value">{consumed}</span>
        </div>

        <div className="divider"></div>

        <div className="legend-row secondary">
          <span className="label">Accrued so far</span>
          <span className="value">{accrued}</span>
        </div>

        <div className="legend-row secondary">
          <span className="label">Annual Quota</span>
          <span className="value">{quota}</span>
        </div>
      </div>

      <button className="explain-btn" style={{ "--btn-color": color }}>
        EXPLAIN
      </button>
    </div>
  );
};

export default LeaveBalance;