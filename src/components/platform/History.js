import React, {useState} from 'react'
import HistoryFilter from './HistoryFilter'
import HistoryList from './HistoryList';

function History({user, transactions}) {
    const [showHistoryFilter, setShowHistoryFilter] = useState(false);
    const [filter, setFilter] = useState('');
    document.documentElement.style.setProperty('--image-visibility','none')
    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
    };

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
            <div><b>Historia transakcji</b> dla <b>{user.username}</b></div> 
            <button onClick={handleToggleHistoryFilter}>Filtruj</button>
        </div>
        
        <div className='Filter'>{showHistoryFilter && <HistoryFilter filter={filter} onFilterChange={handleFilterChange} />}</div>
        
        {transactions.slice().reverse().map((transakcja, index) => (
            filtruj(transakcja) ? <HistoryList transakcja={transakcja} index={index} filter={filter} user={user}/> : null
        ))}
        </div>
    </React.Fragment>
  )
}

export default History