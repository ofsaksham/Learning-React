export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

// Please note: The login does not actually work!
// This exercise is just about practicing event handling

function App() {
  const handleclick = () => {
    user.email = "1";
    user.password = "2";
    user.loggedIn = true;

  }

  return (
    <div id="app">
      <h1>User Login</h1>
    
    <p>
      <label>Email</label>
      <input type="email"></input>
    </p>

    <p>
      <label>Password</label>
      <input type="Password"></input>
    </p>

    <p id="actions">
      <button onClick={handleclick}>Login</button>
    </p>


    </div>
  );
}



export default App;