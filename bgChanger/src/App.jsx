// import './App.css'
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [color, setColor] = useState("grey");
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> </div>
      <div className="flex
      justify-between bg-pink-200 p-2">
      <Buttons onClick={() => changeColor("black")} colorName="black" />
        <Buttons onClick={() => changeColor("blue")} colorName="blue" />
        <Buttons onClick={() => changeColor("khaki")} colorName="khaki" />
        <Buttons onClick={() => changeColor("pink")} colorName="pink" />
        <Buttons onClick={() => changeColor("green")} colorName="green" />
        <Buttons onClick={() => changeColor("red")} colorName="red" />
        <Buttons onClick={() => changeColor("yellow")} colorName="myFavYellow" /></div>
    </>
    
  );
}

export default App;
