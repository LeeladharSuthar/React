import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {user.username ? (
        <div>
          <h1>Profile</h1>
          <p>Hi, {user.username}!</p>
          <button
            onClick={() => {
              setUser({});
            }}
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "5px 15px",
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <h1>Not logged in</h1>
      )}
    </>
  );
}

export default Profile;
