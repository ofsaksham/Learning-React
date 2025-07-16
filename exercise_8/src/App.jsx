// Coding Exercise 4: Outputting Dynamic Content

import React from "react";

export const mydata  = {
  firstname: "Saksham",
  lastname: "kaushik",
  title: "student",
};

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {`${mydata.firstname} ${mydata.lastname}`}
      </h2>
      <p>{mydata.title}</p>
    </div>
  )
}





function App() {
  return (
    <div id="app">
      <h1>Hello React !</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User/>
    </div>
    
  );
}

export default App;