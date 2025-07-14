import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { Header } from './components/Header/header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import tabbutton from './components/tabbutton.jsx';
import { EXAMPLES} from './data.js'


function App() {
  const [ selectedTopic, setSelectedTopic ]= useState();

  function handleSelect(selectedButton) {
    //SelectedButton =>'components', 'jsx', 'props', 'state'

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  // method 3 - Rendering Content Conditionally
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic.title]}</h3>   
        <p>{EXAMPLES[selectedTopic.description]}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic.code]}</code>
        </pre>
      </div> 
    );     
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
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={CoreConcept.title} {...conceptItem}/>
            ))}          {/* transform array in javascript with the help of built in map method. */}
            {/* longer method  */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
	            description={CORE_CONCEPTS[0].description}
	            image={CORE_CONCEPTS[0].image}
            />
            {/* shorter method    Passing a Single Prop Object */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */} 

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
            <tabbutton 
              isSelected={selectedTopic === 'components'} 
              onselect={() => handleSelect('components')}
            >
              Components
            </tabbutton>  {/* here custom argument is components inside the handleselect */}
            <tabbutton 
              isSelected={selectedTopic === 'jsx'} 
              onselect={() => handleSelect('jsx')}
            > 
              JSX
            </tabbutton>
            <tabbutton 
              isSelected={selectedTopic === 'props'} 
              onselect={() => handleSelect('props')}
            >
              Props
            </tabbutton>
            <tabbutton 
              isSelected={selectedTopic === 'state'} 
              onselect={() => handleSelect('state')}
            >
              State
            </tabbutton>
            
          </menu>


          {/*   method 2 - Rendering Content Conditionally
          method 1 - ternary method
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && ( 
            <div id="tab-content">
             
              <h3>{EXAMPLES[selectedTopic.title]}</h3>   {/*uses square bracket inside example for dynamically access the property 
              <p>{EXAMPLES[selectedTopic.description]}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic.code]}
                </code>
              </pre>
            </div> 
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
