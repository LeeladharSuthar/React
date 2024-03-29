import { useState } from 'react'
import './App.css'
import {InputBox} from './components/index.js'
import useCurrency from './hooks/useCurrency.js'
function App() {
  const [amount  , setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setCovertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)
  // console.log(options)
  // console.log(currencyInfo)

  const swap = () =>{
    const tempTo = to;
    const tempFrom = from;
    const tempAmount = amount;
    const tempConvertedAmount = convertedAmount;

    setFrom(tempTo);
    setTo(tempFrom);
    setCovertedAmount(tempAmount);
    setAmount(tempConvertedAmount);
  }

  const convert = ()=>{
    setCovertedAmount(amount * Number(currencyInfo[to]))
  }

  return (

    <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}>
        <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert() 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onCurrencyChange={(currency)=>{
                                  setFrom(currency)
                                }}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{
                                  setAmount(amount)
                                }}
                                currencyOptions={options}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currencyOptions={options}
                                amount={convertedAmount}
                                selectCurrency={to}
                                onCurrencyChange={(currency)=>{
                                  setTo(currency)
                                }}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
