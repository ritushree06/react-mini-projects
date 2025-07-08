import './App.css';
import { useState } from 'react';



function App() {
  const [counter,setCounter]=useState(0);

  const addValue=()=>{
    setCounter(counter+1);
    console.log('Counter value is',counter);
  }
  const reduceValue=()=>{
    setCounter(counter-1);
    console.log('Counter value is',counter);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Program</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br></br>
        <button onClick={reduceValue}>Reduce Value</button>
      </header>
    </div>
  );
}

export default App;
