import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <>
      {user.username ? (
        <p>Welcome: {user.username}</p>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
