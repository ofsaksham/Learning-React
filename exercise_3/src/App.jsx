// Coding Exercise 8: Configuring Event Handlers


export const user = {
  name: '',
}

function App() {
  function handleCreateUser(name) {
    user.name = name;
  }
  
  return (
    <div id="app">
      <h2>User Login</h2>
      <p>
      <label>Name</label>
      <input type="text"></input>
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("Saksham")}>Create User</button>
      </p>
    </div>
  );

}

export default App;