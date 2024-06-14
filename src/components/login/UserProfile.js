import React from "react";
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const UserProfile = ({ user, setUser }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <React.Fragment>
      <header>
        <p>Moje e-grosze</p>
        <div className="header-content">
          <p><strong>{user.username}</strong></p>
          <button onClick={handleLogout}>Logout</button>
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
        <Route path="home" element={<Home />} />
        <Route path="konta" element={<Konta />} />
        <Route path="transakcje" element={<Transakcje />} />
        <Route path="budzet" element={<Budzet />} />
        <Route path="rachunki" element={<Rachunki />} />
        <Route path="ustawienia" element={<Ustawienia />} />
      </Routes>
    </React.Fragment>
  );
};

const Home = () => <div>Home Content</div>;
const Konta = () => <div>Konta Content</div>;
const Transakcje = () => <div>Transakcje Content</div>;
const Budzet = () => <div>Budzet Content</div>;
const Rachunki = () => <div>Rachunki Content</div>;
const Ustawienia = () => <div>Ustawienia Content</div>;

export default UserProfile;
