import React from 'react'
import HistoryList from './HistoryList';

const Home = ({user, transactions}) => {
  if (!user) {
    return <div>Ładowanie danych...</div>;
  }
  var saldoSum=0;
  var cut;
  user.konta.forEach(konto => saldoSum+=konto.saldo);
  if(transactions.length>9) cut = -3;
  else cut = -4;
  const filtruj = (param) =>{
    var isFitted = false;
    user.konta.forEach(konto => {
      if(param.numer_konta_nadawcy === konto.numer_konta || param.numer_konta_odbiorcy === konto.numer_konta){
        isFitted = true;
      }
    })
    return isFitted
  }
  return (
    <React.Fragment>
        <div className="home-body">
            <p><strong>Konta:</strong></p>
            {user.konta.map((konto, index) => (
                      <div key={index}><b>{konto.typ_konta} |</b> NR KONTA: {konto.numer_konta} <b>|</b> SALDO: {konto.saldo} PLN</div>
                    ))}
            <p><strong>Saldo ze wszystkich kont:</strong></p>
                    <div>{saldoSum} PLN</div> 
            <p><strong>Ostatnie transakcje:</strong></p>
                    {transactions.slice(cut).reverse().map((transakcja, index) => (
                      <div key={index}>{filtruj(transakcja) ? <HistoryList transakcja={transakcja} index={index} filter="2" user={user} /> : null}</div>
                    ))}
        </div>
    </React.Fragment>
  )
}

export default Home