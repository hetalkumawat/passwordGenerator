import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  // let count = 5;
  const addValue = () => {
    count = count + 1;
    console.log(count);
    setCount(count);
  };
  const removeValue = () => {
    count--;
    setCount(count);
  };
  return (
    <>
      <h1>counter project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>{" "}
    </>
  );
}

export default App;
