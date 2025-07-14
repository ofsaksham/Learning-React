// Coding Exercise 11: Dynamic Styling

import { useState } from 'react'
import React from 'react'
// import './App.css'

export default function App() {
  const [cssClass, setcssClass ] = useState("");

  return(
    <div>
      <p className={cssClass}>Style Me!</p>
      <button onClick={() => setcssClass("active")}>Toggle style</button>
    </div>
  );
}