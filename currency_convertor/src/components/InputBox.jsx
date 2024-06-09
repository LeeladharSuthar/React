import { useRef } from "react";
import React from "react";
import { Typography } from "@mui/material";

function InputBox({
  label, // from and to
  amount, // amount in input field
  onAmountChange, // function to be run on amount change
  onCurrencyChange, // function to be run on cutrrency change
  currenyOptions = [], // list of currencies
  selectCurrency = "usd", // selected currency
  amountDisabled = false, // input field disaables?
  currencyDisabled = false, // currency select disaables?
  className = "", // Additional Styles
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <Typography
          variant="h6"
          component="h2"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        >
          {label}
        </Typography>

        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number.parseInt(e.target.value));
          }}
          ref={inputRef}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency.toUpperCase()}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currenyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
