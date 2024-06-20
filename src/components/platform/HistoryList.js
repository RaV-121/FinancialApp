import React from 'react'

function HistoryList({transakcja, index, filter, user}) {
  
  const isCorrect = (transakcja, filter) =>{
    var check = false;
    if(transakcja.tytul.includes(filter) || transakcja.data.includes(filter) || transakcja.kwota.toString().includes(filter) || category(user, transakcja).includes(filter) || transakcja.numer_konta_odbiorcy.includes(filter) || transakcja.numer_konta_nadawcy.includes(filter)) check = true;
    return check;
  }

  const category = (user, transakcja) =>{
    var check = "ODEBRANE";
    user.konta.forEach(konto => {
      if(konto.numer_konta  === transakcja.numer_konta_nadawcy){
        check = "WYSŁANE"
        return check;
      }
    })
    return check;
  }
  
  return (
    <React.Fragment>
          {isCorrect(transakcja, filter) ? <div className='transaction' key={index}><b className='dolar'>$</b><b>Tytuł:</b> {transakcja.tytul} <b>|</b> {transakcja.data} <b>| {transakcja.kwota} PLN</b> z KONTA <b>{transakcja.numer_konta_nadawcy}</b> na KONTO <b>{transakcja.numer_konta_odbiorcy}</b> <b>|</b> {category(user, transakcja)}</div> : null}
    </React.Fragment>
  )
}

export default HistoryList