import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import KontaDetails from './KontaDetails';
import wybierzImage from "../../wybierz.png"
const Konta = ({user}) => {
    if (!user) {
        return <div>Ładowanie danych...</div>;
      }
      document.documentElement.style.setProperty('--image-visibility','flex')
  return (
    <React.Fragment>
    <nav className='navigation_konta_container'>
        <ul className="navigation_konta">
        {user.konta.map((konto, index) => (
        <li key={index}><Link to={konto.typ_konta+"-"+(index+1)}>{konto.typ_konta+" "+ konto.id}</Link></li>
        ))}
        </ul>
    </nav>
        <div className="wybierzImage"><img src={wybierzImage} alt="Wybierz" /></div>
    <Routes>
        {user.konta.map((konto, index) => (
            <Route path={konto.typ_konta+"-"+(index+1)} element={<KontaDetails konto={konto} user={user}/>} />
        ))}
    </Routes>
    </React.Fragment>
  )
}

export default Konta