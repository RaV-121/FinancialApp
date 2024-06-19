import React from 'react'

function KontaDetails({konto}) {
  return (
    <React.Fragment>
        <div className='Category'>Typ konta</div>
            <p>{konto.typ_konta}</p>
        <div className='Category'>Numer konta</div>
            <p>{konto.numer_konta}</p>
        <div className='Category'>Saldo</div>
            <p>{konto.saldo}</p>
        <div className='Category'>Pełnomocnictwo</div>
            <p>{konto.pelnomocnictwo}</p>
    </React.Fragment>
  )
}

export default KontaDetails