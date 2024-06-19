import React from "react";
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Home from "../platform/Home.js"
import Konta from "../platform/Konta.js"
import Transakcje from "../platform/Transakcje.js"

const UserProfile = ({ user, setUser }) => {
  const transactionsData = JSON.parse(localStorage.getItem('transactions')) || { transakcje: [] };
  const transactions = transactionsData.transakcje || [];
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('transactions');
    navigate('/');
  };

  return (
    <React.Fragment>
      <header>
        <p>Moje e-grosze</p>
        <div className="header-content">
          <p><strong>{user.username}</strong></p>
          <button className="mainButton" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      
      <nav>
        <ul>
          <li><Link to="home">Pulpit</Link></li>
          <li><Link to="konta">Konta</Link></li>
          <li><Link to="transakcje">Transakcje</Link></li>
          <li><Link to="budzet">Budżet</Link></li>
          <li><Link to="rachunki">Rachunki</Link></li>
          <li><Link to="ustawienia">Ustawienia</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="home" element={<Home user={savedUser} transactions={transactions}/>} />
        <Route path="konta/*" element={<Konta user={savedUser}/>} />
        <Route path="transakcje/*" element={<Transakcje user={savedUser} transactions={transactions}/>} />
        <Route path="budzet" element={<Budzet />} />
        <Route path="rachunki" element={<Rachunki />} />
        <Route path="ustawienia" element={<Ustawienia />} />
      </Routes>
    </React.Fragment>
  );
};
const Budzet = () => <div>Budzet Content</div>;
const Rachunki = () => <div>Rachunki Content</div>;
const Ustawienia = () => <div>Ustawienia Content</div>;

export default UserProfile;
