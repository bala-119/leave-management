// src/components/UserProfile.jsx

import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="profile-card">

      <img
        src="https://i.pravatar.cc/150"
        alt="profile"
        className="profile-img"
      />

      <h2>Balasubramaniyan</h2>

      <p>Software Developer</p>

      <div className="profile-info">
        <span>Email:</span>
        <span>balasubramaniyan@gmail.com</span>
      </div>

      <div className="profile-info">
        <span>Department:</span>
        <span>IT</span>
      </div>

      <div className="profile-info">
        <span>Leaves Left:</span>
        <span>12</span>
      </div>

      <button>Edit Profile</button>

    </div>
  );
}

export default UserProfile;