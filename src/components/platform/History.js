import React, {useState} from 'react'
import HistoryFilter from './HistoryFilter'
import HistoryList from './HistoryList';

function History({user, transactions}) {
    const [showHistoryFilter, setShowHistoryFilter] = useState(false);

    const handleToggleHistoryFilter = () => {
        setShowHistoryFilter(!showHistoryFilter);
    };
    const filtruj = (param) =>{
        var isFitted = false;
        user.konta.forEach(konto => {
          if(param.numer_konta_nadawcy === konto.numer_konta || param.numer_konta_odbiorcy === konto.numer_konta){
            console.log(param.tytul+" "+param.kwota+" PLN "+param.data);
            isFitted = true;
          }
        })
        return isFitted
      }
    return (
    <React.Fragment>
        <div className='transaction-list'>
        <div className='History-header'>
            <div>Historia transakcji {user.username}</div> 
            <button onClick={handleToggleHistoryFilter}>Filtruj</button>
        </div>
        
        <div className='Filter'>{showHistoryFilter && <HistoryFilter user={user} transactions={transactions} />}</div>
        
        {transactions.map((transakcja, index) => (
            filtruj(transakcja) ? <HistoryList transakcja={transakcja} index={index} /> : null
        ))}
        </div>
    </React.Fragment>
  )
}

export default History