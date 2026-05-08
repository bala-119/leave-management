import './App.css'

import UserProfile from './components/UserProfile'
import LeaveBalance from './components/LeaveBalance'
import PastLeaves from './components/PastLeave'
import ApplyLeave from './components/ApplyLeave'

import users from "./data/users.json";

import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function Dashboard({ currentUser, currentData, setIndex, userNames }) {

  const navigate = useNavigate();

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
          employee={currentData}
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

        <PastLeaves pastLeaves={currentData.pastLeaves} />

      </div>

    </div>

  );
}

function App() {
  const [allUsers, setAllUsers] = useState(users);
  const [index, setIndex] = useState(0);

  const userNames = Object.keys(allUsers);
  const currentUser = userNames[index];
  const currentData = allUsers[currentUser];

  const handleApplyLeave = (formData) => {
    const { leaveType, fromDate, toDate } = formData;

    // Calculate days
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    // Map leaveType to key in JSON
    const leaveKeyMap = {
      "Paid Leave": "paidLeave",
      "Sick Leave": "sickLeave",
      "Casual Leave": "casualLeave"
    };
    const key = leaveKeyMap[leaveType];

    if (key && currentData.leaveSummary[key].available >= diffDays) {
      setAllUsers(prev => {
        const updatedUsers = { ...prev };
        const updatedUser = { ...updatedUsers[currentUser] };
        
        updatedUser.leaveSummary = { 
          ...updatedUser.leaveSummary,
          [key]: {
            available: updatedUser.leaveSummary[key].available - diffDays,
            consumed: updatedUser.leaveSummary[key].consumed + diffDays
          }
        };

        updatedUser.pastLeaves = [
          {
            leaveType,
            from: fromDate,
            to: toDate,
            status: "Approved",
            approvedBy: "Manager"
          },
          ...updatedUser.pastLeaves
        ];

        updatedUsers[currentUser] = updatedUser;
        return updatedUsers;
      });
      return true;
    } else {
      alert("Insufficient leave balance!");
      return false;
    }
  };

  return (
    <Routes>

      <Route path="/" element={
        <Dashboard
          currentUser={currentUser}
          currentData={currentData}
          setIndex={setIndex}
          userNames={userNames}
        />
      } />

      <Route path="/applyleave" element={
        <ApplyLeave
          onApplyLeave={handleApplyLeave}
        />
      } />

    </Routes>
  );
}

export default App;