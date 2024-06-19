import React from 'react'
import HistoryList from './HistoryList';

const Home = ({user, transactions}) => {
  if (!user) {
    return <div>Ładowanie danych...</div>;
  }
  var saldoSum=0;
  user.konta.forEach(konto => saldoSum+=konto.saldo);

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
        <div className="home-body">
            <p><strong>Konta:</strong></p>
            {user.konta.map((konto, index) => (
                      <div key={index}>{konto.typ_konta} {konto.numer_konta} {konto.saldo} {konto.id}</div>
                    ))}
            <p><strong>Saldo ze wszystkich kont:</strong></p>
                    <div>{saldoSum}</div> 
            <p><strong>Ostatnie transakcje:</strong></p>
                    {transactions.slice(0,4).map((transakcja, index) => (
                      filtruj(transakcja) ? <HistoryList transakcja={transakcja} index={index} filter="Tytul" user={user} /> : null
                    ))}
        </div>
    </React.Fragment>
  )
}

export default Home