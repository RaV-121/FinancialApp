import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import History from "./History.js"
function Transakcje({user, transactions}) {
  return (
    <React.Fragment>
    <nav className='navigation_konta_container'>
        <ul className="navigation_konta">
        <li><Link to="history">Historia</Link></li>
        <li><Link to="new-transaction">Nowa transakcja</Link></li>
        </ul>
    </nav>

    <Routes>
            <Route path="history" element={<History user={user} transactions={transactions}/>} />
            <Route path="new-transaction" element={<NowaTransakcja />} />
    </Routes>
    </React.Fragment>
  )
}
const NowaTransakcja = () => <div>Nowa Transakcja Content</div>;
export default Transakcje