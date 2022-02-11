import './App.css';
import CurrencyRow from './components/CurrencyRow';
import { useEffect, useState } from 'react';

const api = 'https://api.exchangerate.host/latest';



function App() {

    const [currencyOptions, setCurrenyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();


 useEffect(()=>{
   fetch(api)
   .then(res => res.json())
  .then(data => {
     const firstCurrency = Object.keys(data.rates)[0];
     setCurrenyOptions([data.base, ...Object.keys(data.rates)]);
       setFromCurrency(data.base);
       setToCurrency(firstCurrency);
  })
 });

  return (
    <div className="App">
        <h2>Convert App</h2>
        
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
      />
      <div className='equal'>=</div>

      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
      />

    </div>
  );
 };

export default App;
