// Coding Exercise 5: Working with Props

export function CourseGoal({title,description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
    const courseGoals = [{ title: "Learn React", description: "In-depth"}, {title: "Practice", description: "Practice working with React components etc"}] 
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal { ...courseGoals[0] }/>
        <CourseGoal { ...courseGoals[1] }/>
      </ul>
    </div>
  );
}

export default App;