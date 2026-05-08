// src/components/UserProfile.jsx

import "./UserProfile.css";
import users from "../data/users.json";

function UserProfile({ currentUser, setIndex, userNames }) {

  const data = users[currentUser];

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

      <p>{data.role}</p>

      <div className="profile-info">
        <span>Email:</span>
        <span>{data.email}</span>
      </div>

      <div className="profile-info">
        <span>Department:</span>
        <span>{data.department}</span>
      </div>

      <div className="profile-info">
        <span>Leaves Left:</span>

        <span>
          Paid: {data.leaveSummary.paidLeave.available} |
          Sick: {data.leaveSummary.sickLeave.available} |
          Casual: {data.leaveSummary.casualLeave.available}
        </span>
      </div>

      <button onClick={switchProfile}>
        Switch Profile
      </button>

    </div>
  );
}

export default UserProfile;