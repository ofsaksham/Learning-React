import { CORE_CONCEPTS } from './data.js';
import { Header } from './components/Header/header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import tabbutton from './components/tabbutton.jsx';


function App() {

  function handleSelect() {
    console.log('hello world - selected!');
  }


  return (
    <div>
      {/* <header>
        <h1>hey Saksham</h1>
      </header> */}
      <header />

      <main>
        <section id='coreconcepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* longer method  */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
	            description={CORE_CONCEPTS[0].description}
	            image={CORE_CONCEPTS[0].image}
            />
            {/* shorter method    Passing a Single Prop Object */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>

        <section id="example">
          <h2>Example</h2>
          <menu>

          </menu>

        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* <tabbutton label='Components' /> */}
            <tabbutton onselect={handleSelect}>Components</tabbutton>
            <tabbutton onselect={handleSelect}>JSX</tabbutton>
            <tabbutton onselect={handleSelect}>Props</tabbutton>
            <tabbutton onselect={handleSelect}>State</tabbutton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
