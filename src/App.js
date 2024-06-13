import './App.css';
import React, { useState, useEffect } from 'react';
import LoginForm from './components/login/LoginForm';
import UserProfile from './components/login/UserProfile';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userProfile) => {
    setUser(userProfile);
    localStorage.setItem('user', JSON.stringify(userProfile));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div>
      {user ? (
        <UserProfile user={user} onLogout={handleLogout}/>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
