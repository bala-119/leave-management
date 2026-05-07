import './App.css'

import UserProfile from './components/UserProfile'
import LeaveBalance from './components/LeaveBalance'
import PastLeaves from './components/PastLeave'

function App() {

  const leaveData = [
    {
      type: "Paid Leave",
      availableDays: 4.2,
      available: "4.2d",
      consumed: "15.8d",
      accrued: "20.0d",
      quota: "20.0d",
      color: "#3b82f6",
      percentage: 285
    },
    {
      type: "Sick Leave",
      availableDays: 6,
      available: "6d",
      consumed: "4d",
      accrued: "10d",
      quota: "10d",
      color: "#ef4444",
      percentage: 216
    },
    {
      type: "Casual Leave",
      availableDays: 3,
      available: "3d",
      consumed: "2d",
      accrued: "5d",
      quota: "5d",
      color: "#10b981",
      percentage: 180
    }
  ];

  return (

    <div className="dashboard">

      {/* Left Side */}
      <UserProfile />

      {/* Right Side */}
      <div className="right-section">

        {/* Leave Cards */}
        <div className="leave-cards">

          {leaveData.map((leave, index) => (
            <LeaveBalance
              key={index}
              title={leave.type}
              availableDays={leave.availableDays}
              available={leave.available}
              consumed={leave.consumed}
              accrued={leave.accrued}
              quota={leave.quota}
              color={leave.color}
              percentage={leave.percentage}
            />
          ))}

        </div>

        {/* Table Below Cards */}
        <PastLeaves />

      </div>

    </div>
  );
}

export default App;