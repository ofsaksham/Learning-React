// Coding Exercise 18: Dynamic Styling with CSS Classes

import React from 'react';
function App() {
    const [headingClass, setHeadingClass] = React.useState("");
  return (
    <div id="app">
      <h1 className={`${headingClass}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setHeadingClass("highlight-green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setHeadingClass("highlight-red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
