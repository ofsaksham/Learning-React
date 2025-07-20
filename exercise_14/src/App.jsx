// Coding Exercise 16: Two-Way-Binding

import React from 'react';
import { useState } from 'react';
import Review from './Review';

// don't change the Component name "App"
function App() {
    const [feedback, setFeedback] = useState("");
    const [student, setStudent] = useState("");
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={(evt) => setFeedback(evt.target.value)} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={(evt) => setStudent(evt.target.value)} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review {...{student, feedback}}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;