// Coding Exercise 17: Dynamic Styling with Inline Styles 
import { useState } from 'react'

function App() {
  const [headingColor, setHeadingColor] = useState("White")

  return (
    <div id='app'>
      <h1 style={{color : headingColor}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setHeadingColor("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setHeadingColor("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;



