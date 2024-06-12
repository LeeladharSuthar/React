import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (specialCharsAllowed) {
      str += "!@#$%^&*()-_=+<>,.;:[]{}\\|";
    }

    for (let i = 1; i <= length; i++) {
      // let idx = Math.floor(Math.rondom() * str.length + 1); // [1, str.length]
      let idx = Math.floor(Math.random() * (str.length + 1)); // [0, str.length]
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, setPassword, numberAllowed, specialCharsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordReference.current.select();
    // passwordReference.current.setSelectionRange(2, 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, specialCharsAllowed, numberAllowed]);

  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl text-blue-400 ">
        Password Generator
      </h1>
      <div className="border-white border-2 w-2/5 h-1/3 rounded-2xl min-w-[425px] min-h-[125px] shadow-lg shadow-black flex flex-col justify-evenly items-center">
        <div className="flex w-10/12 justify-between">
          <input
            className="h-10 w-10/12 rounded-md border border-black/30 outline-none px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Password"
            value={password}
            readOnly={true}
            ref={passwordReference}
          ></input>
          <button
            type="button"
            className="rounded-md h-10 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex w-10/12 h-1/2">
          <div className="w-2/5 flex flex-col justify-evenly">
            <div className="flex justify-between px-4">
              <label className="text-white font-normal" htmlFor="num">
                Numbers
              </label>
              <input
                id="num"
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
            </div>
            <div className="flex justify-between px-4">
              <label className="text-white font-normal" htmlFor="char">
                Characters
              </label>
              <input
                id="char"
                type="checkbox"
                defaultChecked={specialCharsAllowed}
                onChange={() => {
                  setSpecialCharsAllowed((prev) => !prev);
                }}
              />
            </div>
          </div>
          <div className="flex w-3/5 flex-col items-center h-full justify-evenly">
            <div className="flex justify-between">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-white font-semibold">
                Length: {length}
              </label>
            </div>
            <button
              className="rounded-md h-10 bg-black px-3 py-2 w-1/2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={passwordGenerator}
            >
              Another
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
