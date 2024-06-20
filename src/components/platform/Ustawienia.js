import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Personalizacja from "./UstawPersonalizacja.js"
import exampleImage from "../../Prace_serwisowe.png"
import wybierzImage from "../../wybierz2.png"
function Ustawienia() {
    document.documentElement.style.setProperty('--image-visibility','flex')
    return (
    <React.Fragment>
    <nav className='navigation_konta_container'>
        <ul className="navigation_konta">
        <li><Link to="personalizacja">Personalizacja</Link></li>
        <li><Link to="zarzadzanie">Zarządzanie profilem</Link></li>
        <li><Link to="bezp-i-pryw">Bezpieczeństwo i prytwatność</Link></li>
        </ul>
    </nav>
    <div className="wybierzImage"><img src={wybierzImage} alt="Wybierz" /></div>
    <Routes>
            <Route path="personalizacja" element={<Personalizacja />} />
            <Route path="zarzadzanie" element={<Zarzadzanie />} />
            <Route path="bezp-i-pryw" element={<Bezpieczenstwo />} />
    </Routes>
    </React.Fragment>
  )
}

const Zarzadzanie = () => {
    document.documentElement.style.setProperty('--image-visibility','none')
    return (<div className="praceSerwisowe"><img src={exampleImage} alt="Prace serwisowe" /></div>)
}

const Bezpieczenstwo = () => {
    document.documentElement.style.setProperty('--image-visibility','none')
    return (<div className="praceSerwisowe"><img src={exampleImage} alt="Prace serwisowe" /></div>)
}

export default Ustawienia