import React from 'react'

function HistoryList({transakcja, index, filter, user}) {
  
  const isCorrect = (transakcja, filter) =>{
    var check = false;
    if(transakcja.tytul.includes(filter) || transakcja.data.includes(filter) || transakcja.kwota.toString().includes(filter) || category(user, transakcja).includes(filter) || transakcja.numer_konta_odbiorcy.includes(filter) || transakcja.numer_konta_nadawcy.includes(filter)) check = true;
    return check;
  }

  const category = (user, transakcja) =>{
    var check = "Odebrane";
    user.konta.forEach(konto => {
      if(konto.numer_konta  === transakcja.numer_konta_nadawcy){
        check = "Wysłane"
        return check;
      }
    })
    return check;
  }
  
  return (
    <React.Fragment>
          {isCorrect(transakcja, filter) ? <div className='transaction' key={index}><b>$</b>{transakcja.tytul} {transakcja.kwota} PLN {transakcja.data} z KONTA {transakcja.numer_konta_nadawcy} na KONTO {transakcja.numer_konta_odbiorcy} {category(user, transakcja)}</div> : null}
    </React.Fragment>
  )
}

export default HistoryList