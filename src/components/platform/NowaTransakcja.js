import React, { useState } from "react";

function NowaTransakcja({ user, onAddTransaction }) {
    const [kwota, setKwota] = useState('');
    const [tytul, setTytul] = useState('');
    const [numer_konta_nadawcy, setNrNadawcy] = useState('');
    const [numer_konta_odbiorcy, setNrOdbiorcy] = useState('');
    const [nazwa_odbiorcy, setNazwaOdbiorcy] = useState('');
    const [adres_odbiorcy, setAdresOdbiorcy] = useState('');

    document.documentElement.style.setProperty('--image-visibility','none')

    function getFormattedDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = today.getFullYear();
      
        return `${day}-${month}-${year}`;
      }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
        numer_konta_nadawcy,
        nazwa_nadawcy: user.pełnomocnictwo,
        adres_nadawcy: user.adres_pelnomocnika,

        numer_konta_odbiorcy,
        nazwa_odbiorcy,
        adres_odbiorcy,
        kwota: parseFloat(kwota),
        data: getFormattedDate(),
        tytul
    };
    onAddTransaction(newTransaction);
    setNrNadawcy('');

    setNrOdbiorcy('');
    setNazwaOdbiorcy('');
    setAdresOdbiorcy('');
    setKwota('');
    setTytul('');
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="newTransactionForm">
        <div>
          <label>
            Numer konta nadawcy:
            <select value={numer_konta_nadawcy} onChange={(e) => setNrNadawcy(e.target.value)} required>
            <option key={10} value="wybierz">Wybierz</option>
            {user.konta.map((konto, index) => (
                <option key={index} value={konto.numer_konta}>{konto.numer_konta} Saldo: {konto.saldo} PLN</option>
            ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Numer konta odbiorcy:
            <input
              type="number"
              value={numer_konta_odbiorcy}
              onChange={(e) => setNrOdbiorcy(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Nazwa odbiorcy:
            <input
              type="text"
              value={nazwa_odbiorcy}
              onChange={(e) => setNazwaOdbiorcy(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Adres odbiorcy:
            <input
              type="text"
              value={adres_odbiorcy}
              onChange={(e) => setAdresOdbiorcy(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Kwota:
            <input
              type="number"
              value={kwota}
              onChange={(e) => setKwota(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Tytul:
            <input
              type="text"
              value={tytul}
              onChange={(e) => setTytul(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Potwierdź</button>
      </form>
    </React.Fragment>
  );
}

export default NowaTransakcja;
