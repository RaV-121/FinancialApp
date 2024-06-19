import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import KontaDetails from './KontaDetails';
const Konta = ({user}) => {
    if (!user) {
        return <div>Ładowanie danych...</div>;
      }

  return (
    <React.Fragment>
    <nav className='navigation_konta_container'>
        <ul className="navigation_konta">
        {user.konta.map((konto, index) => (
        <li><Link to={konto.typ_konta+"-"+(index+1)}>{konto.typ_konta+" "+ konto.id}</Link></li>
        ))}
        </ul>
    </nav>

    <Routes>
        {user.konta.map((konto, index) => (
            <Route path={konto.typ_konta+"-"+(index+1)} element={<KontaDetails konto={konto}/>} />
        ))}
    </Routes>
    </React.Fragment>
  )
}

export default Konta