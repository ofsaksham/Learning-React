// Coding Exercise 19: Exercise: Dynamic Styles
import React from "react";
import { useState } from "react";

export default function App() {
  const[isRed, setIsRed] = useState(false);
  function clickHandler() {
    setIsRed(isRed => !isRed);
  }
  return (
    <div>
      <p style={{color: isRed ? 'red' : 'white'}}>Style Me!</p>
      <button onClick={clickHandler}>Toggle Me!</button>
    </div>
  );
}