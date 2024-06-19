import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import History from "./History.js"
import NowaTransakcja from "./NowaTransakcja.js"
function Transakcje({user, transactions}) {

  const handleAddTransaction = (newTransaction) => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    const updatedTransactions = (savedTransactions.transakcje).concat(newTransaction)
    localStorage.setItem('transactions', JSON.stringify({transakcje: updatedTransactions}));
    
    let savedUser = { konta: [] };
    savedUser = JSON.parse(localStorage.getItem('user'));
    let updatedUser;
    {savedUser.konta.map(konto => {
      let updatedSaldo = konto.saldo;
      if(konto.numer_konta === newTransaction.numer_konta_nadawcy){
        updatedSaldo = konto.saldo - newTransaction.kwota;
        return updatedUser = {...savedUser, konta:[{...konto, saldo: updatedSaldo}]}
      }else{
        return updatedUser.konta = updatedUser.konta.concat([{...konto}])
      }
    })}
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
  };

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
            <Route path="new-transaction" element={<NowaTransakcja user={user} onAddTransaction={handleAddTransaction}/>} />
    </Routes>
    </React.Fragment>
  )
}

export default Transakcje