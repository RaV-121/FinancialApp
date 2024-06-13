import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import UserProfile from './components/login/UserProfile';

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userProfile) => {
    setUser(userProfile);
    localStorage.setItem('user', JSON.stringify(userProfile));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Routes>
        <Route path="/profile" element={user ? <UserProfile user={user} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
