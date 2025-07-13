// Coding Exercise 9: Working with State

import { useState } from 'react'
import React from 'react';


export default function App() {

  // const [state, setState] = useState(initialValue);
  const [price, setprice] = useState(100);
  const handleClick = () => {setprice(75)}
  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={handleClick}>Apply Discount</button>
    </div>
  );
}

