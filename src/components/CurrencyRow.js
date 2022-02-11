import React from "react";
import '../index.css';

function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency
    } = props;

  return (
    <div className="container">
      <input className="input" type="number" />
      <select value={selectedCurrency}>

      {currencyOptions.map((option, i) => (
        <option key={i} value="{option}">{option}</option>
      ))}
        
      </select>
    </div>
  );
}

export default CurrencyRow;
