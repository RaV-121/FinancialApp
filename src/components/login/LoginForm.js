import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Weryfikacja danych
    try {
      const usersResponse = await fetch('/data/users.json');
      if (!usersResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await usersResponse.json();
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        const transactionsResponse = await fetch('/data/transactions.json');
        if (!transactionsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const transactionsData = await transactionsResponse.json();
        localStorage.setItem('transactions', JSON.stringify(transactionsData));
        onLogin(user);
        navigate('/profile/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    }
  };

  return (
    <div className="full-screen-container">
      <form className="loginForm" onSubmit={handleSubmit}>
      <h1>Moje e-grosze</h1>
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
      <button className="mainButton" type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
