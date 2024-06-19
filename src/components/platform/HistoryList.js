import React from 'react'

function HistoryList({transakcja, index}) {
  return (
    <React.Fragment>
          <div className='transaction' key={index}><b>$</b>{transakcja.tytul} {transakcja.kwota} PLN {transakcja.data}</div>
    </React.Fragment>
  )
}

export default HistoryList