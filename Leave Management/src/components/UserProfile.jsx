// src/components/UserProfile.jsx

import "./UserProfile.css";
function UserProfile({ currentUser, employee, setIndex, userNames }) {

  function switchProfile() {

    setIndex((prev) => {

      const nextIndex =
        (prev + 1) % userNames.length;

      localStorage.setItem(
        "currentUser",
        userNames[nextIndex]
      );

      return nextIndex;
    });

  }

  return (
    <div className="profile-card">

      <img
        src="https://i.pravatar.cc/150"
        alt="profile"
        className="profile-img"
      />

      <h2>{currentUser}</h2>

      <p>{employee.role}</p>

      <div className="profile-info">
        <span>Email:</span>
        <span>{employee.email}</span>
      </div>

      <div className="profile-info">
        <span>Department:</span>
        <span>{employee.department}</span>
      </div>

      <div className="profile-info">
        <span>Leaves Left:</span>

        <span>
          Paid: {employee.leaveSummary.paidLeave.available} |
          Sick: {employee.leaveSummary.sickLeave.available} |
          Casual: {employee.leaveSummary.casualLeave.available}
        </span>
      </div>

      <button onClick={switchProfile}>
        Switch Profile
      </button>

    </div>
  );
}

export default UserProfile;