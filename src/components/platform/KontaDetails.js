import React from 'react'

function KontaDetails({konto, user}) {
  document.documentElement.style.setProperty('--image-visibility','none')
  return (
    <React.Fragment>
        <div className='konto_details'>
          <div className='Category'>Pełnomocnictwo</div>
            <p className='childCategory'>{user.pelnomocnictwo}</p>
          <div className='Category'>Adres</div>
            <p className='childCategory'>{user.adres_pelnomocnika}</p>
          <div className='Category'>Typ konta</div>
              <p className='childCategory'>{konto.typ_konta}</p>
          <div className='Category'>Numer konta</div>
              <p className='childCategory'>{konto.numer_konta}</p>
          <div className='Category'>Saldo</div>
              <p className='childCategory'>{konto.saldo} PLN</p>
        </div>
    </React.Fragment>
  )
}

export default KontaDetails