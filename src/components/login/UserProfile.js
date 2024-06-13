import React from "react";

const UserProfile = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>This is your profile page.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
