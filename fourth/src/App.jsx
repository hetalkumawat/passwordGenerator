import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNum] = useState(false);
  const [character, setChar] = useState(false);
  const [password, setPass] = useState("");

  const banner = () => (
    alert("Copied to clipboard!")
  );

  // ref hook
  const passRef = useRef(null);

  const copyToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += ")(*&^%$#@#$!`~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);
  const regeneratePassword = () => {
    passwordGenerator();
     // Optionally display a banner after regenerating the password
  };

  return (<div>
    <div className="text-xl text-center text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 p-2">
      <h1 className="pb-2 font-mono">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        ></input>
        <button
          onClick={() => {
            copyToClip();
            banner(); // Call banner function here if you want to display it
          }}
          type="button"
          className="rounded-full bg-orange-500 px-3 py-2 text-sm  mx-2 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-mono"
        >
          Copy
        </button>
        <button
          onClick={(regeneratePassword) 
            
          }
          type="button"
          className="rounded-full bg-orange-500 px-3 py-2 text-sm  mx-2 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-mono"
        >
          Regenerate
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label className="font-mono"> Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            id="numberInput"
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="font-mono">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={character}
            id="charInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" className="font-mono">Characters</label>
        </div>
      </div>
     
    </div>
     <footer className="text-xs text-center text-orange-500   shadow-md rounded-lg px-2  bg-gray-700 p-2 absolute bottom-0 w-full font-mono"> Build with react by Hetal.</footer></div>
  );
}

export default App;
