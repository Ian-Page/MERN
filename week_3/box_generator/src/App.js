import React, { useState } from 'react';
import './App.css';
import BoxCreator from './components/BoxCreator';
import BoxDisplay from './components/BoxDisplay';

function App() { 

  
  const [ BoxArray, setBoxArray ] = useState([]);
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <a target="_blank" href='https://www.w3schools.com/colors/colors_names.asp'> Check out the colors list! </a>
      <BoxCreator BoxArray={ BoxArray } setBoxArray={setBoxArray} />
      <BoxDisplay BoxArray={ BoxArray } />
      
    </div>
  );
}

export default App;
