# Moje e-grosze : Projekt aplikacji do zarządzania finansami

>Ten projekt powstał w celu zapoznania się z ogólnym działaniem oraz mechanizmami powszechnie stosowanymi w aplikacjach typu fintech.
Projekt zakłada próbę odwzorowania zasad działania tego typu aplikacji oraz wprowadzenie nowych, innowacyjnych usług.

## Schemat projektu

Docelowy schemat całej aplikacji: 
- `UI` <---> `API` <---> `Server Proxy` <---> `Baza Danych`

Ze względu na rozległość całego projektu dotychczasowe działania sprowadziły się do schematu: 
- `UI` <---> `pliki .JSON` (z danymi o użytkownikach oraz ich transakcjach) / webowe `localStorage`

Na początku warstwa UI używa metody `fetch()` by pobrać dane z plików .JSON a następnie zapisuje je w localStorage w którym aktualizowane są dane w razie działań użytkownika (w celu symulacji komunikacji z bazą danych)

## Technologie

>W projekcie zastosowano technologie webowe takie jak: `HTML`, `CSS` oraz wieloparadygmatowy język `JavaScript`. Do budowy całego interfejsu użytkownika została użyta jedna z najpopularniejszych bibliotek JavaScriptowych - ***`React`***. Dzięki niej aplikacja działa na zasadzie SPA (single-page-application) która korzysta z jednego szablonu HTML oraz w razie pewnych działań użytkownika wymienia tylko poszczególne komponenty bez potrzeby odświeżania całej aplikacji.

## Wykorzystane generatory komponentów
### `create-react-app`
> Pakiet generujący podstawową strukturę katalogów i plików

Zaimplementowane poprzez komendę:
```sh
npx create-react-app 'nazwa_projektu'
```

## Wykorzystane narzędzia
### `react-router-dom`
> Narzędzie pozwalające na definiowanie i zarządzanie trasami w aplikacji

Zaimplementowane poprzez komendę:
```sh
npm install react-router-dom
```

### `react-hook-form`
> Narzędzie ułatwiające obsługę formularzy

Zaimplementowane poprzez komendę:
```sh
npm install react-hook-form
```
## Struktura plików aplikacji
> Wypisane tylko najważniejsze segmenty
* node_modules
* public
    * data
        * transactions.json
        * users.json
* src
    * App.js
    * App.css
    * components
        * login
            * (pliki **JS**)
        * platform
            * (pliki **JS**)

## Uruchomienie aplikacji
> Aby skorzystać z aplikacji należy wejść do katalogu głównego projektu oraz wpisać w cmd komendę

```sh
npm start
```

> Następnie pokaże się okno logowania dla użytkownika. Domyślnie dodanych jest 3 użytkowników gdzie loginy i hasła znajdują się w `users.json`. 

Dla celu uruchomienia aplikacji informacje o jednym z użytkowników:
`Login`: Random
`Hasło`: Whoknows

> Po poprawnym wprowadzeniu danych ukazuje się okno główne aplikacji

## Struktura aplikacji (zakładki)
> Część zakładek tymczasowo nie jest dostępna ze względu na brak zaimplementowanych mechanizmów oraz brak bazy danych z którą mogłaby wymieniać dane. Jendakże, każda z zakładek posiada routowanie do osobnej ścieżki.
* Pulpit
* Konta
    * (lista kont)
* Transakcje
    * Historia
    * Nowa transakcja
* Budżet `niedostępne`
* Rachunki `niedostępne`
* Ustawienia
    * Personalizacja
    * Zarządzanie profilem `niedostępne`
    * Bezpieczeństwo i prywatność `niedostępne`
    
### Pulpit
> Zawiera podsumowanie o kontach użytkowników, ich saldach oraz ostatnio dokonanych transakcjach

### Konta
> Zawiera informacje o poszczególnych kontach oraz ich właścicielach

### Transakcje
> Zawiera historię o wszystkich dokonanych transakcjach ( z możliwością filtrowania ) oraz umożliwia dokonanie nowej

### Ustawienia
> Zawiera zakładkę z możliwością zmiany kolorystyki / motywu całej aplikacji

## Docelowe działanie tymczasowo niedostępnych zakładek
### Budżet
> Będzie zawierać :
* analizę zysków i strat z konkretnych przedziałów czasowych
* możliwość planowania i określania celów finansowych

### Rachunki
> Będzie zawierać :
* listę o zbliżających się rachunkach
* możliwość dodawania nowych rachunków

### Ustawienia / Zarządzanie i Bezpieczeństwo
> Będzie zawierać :
* możliwość zmiany hasła do konta
* określanie limitów związanych z dokonywanie transakcji
