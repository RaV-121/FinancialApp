import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Weryfikacja danych
    fetch("/data/users.json")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          onLogin(user);
        } else {
          setError("Invalid username or password");
        }
      })
      .catch(() => {
        setError("Error fetching user data");
        console.log(username + " " + password);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;