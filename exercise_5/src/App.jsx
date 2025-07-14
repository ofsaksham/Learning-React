// Coding Exercise 10: Conditional Content

import React from 'react';
import { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const [showWarning, setShowWarning] = useState(false);
    const handleWarningToggle = () => {
        setShowWarning(prev => !prev);
    }
    return (
      <div>
        {showWarning && <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleWarningToggle}>Proceed</button>
        </div>}
        {!showWarning && <button onClick={handleWarningToggle}>Delete</button>}
      </div>    
    );
}