import React, { useState } from 'react';
import './App.css';
import BoxCreator from './components/BoxCreator';
import BoxDisplay from './components/BoxDisplay';

function App() { 

  
  const [ BoxArray, setBoxArray ] = useState([]);
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxCreator BoxArray={ BoxArray } setBoxArray={setBoxArray} />
      <BoxDisplay BoxArray={ BoxArray } />
      
    </div>
  );
}

export default App;
