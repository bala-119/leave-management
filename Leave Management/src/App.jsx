import './App.css'

import UserProfile from './components/UserProfile'
import LeaveBalance from './components/LeaveBalance'
import PastLeaves from './components/PastLeave'
import ApplyLeave from './components/ApplyLeave'

import users from "./data/users.json";

import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function Dashboard() {

  const navigate = useNavigate();

  // users list
  const userNames = Object.keys(users);

  // current user index
  const [index, setIndex] = useState(0);

  // current user name
  const currentUser = userNames[index];
  console.log(currentUser)

  // current user data
  const currentData = users[currentUser];

  // dynamic leave data from JSON
  const leaveData = [
    {
      type: "Paid Leave",
      availableDays: currentData.leaveSummary.paidLeave.available,
      available: `${currentData.leaveSummary.paidLeave.available}d`,
      consumed: `${currentData.leaveSummary.paidLeave.consumed}d`,
      color: "#3b82f6",
      percentage: 285
    },

    {
      type: "Sick Leave",
      availableDays: currentData.leaveSummary.sickLeave.available,
      available: `${currentData.leaveSummary.sickLeave.available}d`,
      consumed: `${currentData.leaveSummary.sickLeave.consumed}d`,
      color: "#ef4444",
      percentage: 216
    },

    {
      type: "Casual Leave",
      availableDays: currentData.leaveSummary.casualLeave.available,
      available: `${currentData.leaveSummary.casualLeave.available}d`,
      consumed: `${currentData.leaveSummary.casualLeave.consumed}d`,
      color: "#10b981",
      percentage: 180
    }
  ];

  return (

    <div className="dashboard">

      {/* Left Side */}
      <div className="left-section">

        <UserProfile
          currentUser={currentUser}
          setIndex={setIndex}
          userNames={userNames}
        />

        <button
          className="apply-btn"
          onClick={() => navigate("/applyleave")}
        >
          Apply Leave
        </button>

      </div>

      {/* Right Side */}
      <div className="right-section">

        <div className="leave-cards">

          {leaveData.map((leave, index) => (
            <LeaveBalance
              key={index}
              title={leave.type}
              availableDays={leave.availableDays}
              available={leave.available}
              consumed={leave.consumed}
              color={leave.color}
              percentage={leave.percentage}
            />
          ))}

        </div>

        <PastLeaves currentUser={currentUser} />

      </div>

    </div>

  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/applyleave" element={<ApplyLeave />} />

    </Routes>
  );
}

export default App;