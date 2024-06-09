import { InputBox } from "./components/index.js";
import bgImage from "./assets/bg.jpg";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { useState } from "react";

function App() {
  const [fromAmount, setFromAmount] = useState();
  const [toAmount, setToAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo();

  const swap = () => {
    const oldFromCurrency = fromCurrency;
    const oldToCurrency = toCurrency;

    setFromCurrency(oldToCurrency);
    setToCurrency(oldFromCurrency);
  };

  const convert = () => {
    const fromRate = currencyInfo[fromCurrency.toUpperCase()];
    const usd = fromAmount / fromRate;
    const amount = usd * currencyInfo[toCurrency.toUpperCase()];
    setToAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                currenyOptions={Object.keys(currencyInfo).sort()}
                selectCurrency={fromCurrency}
                onAmountChange={setFromAmount}
                onCurrencyChange={setFromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                currenyOptions={Object.keys(currencyInfo).sort()}
                selectCurrency={toCurrency}
                onAmountChange={setToAmount}
                onCurrencyChange={setToCurrency}
                amountDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;