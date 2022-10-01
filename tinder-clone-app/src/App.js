import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route ,} from 'react-router-dom';
/*may not need link ^ */
import Chat from './components/Chat';
import Home from './components/Home';
import BottomButtons from './components/BottomButtons';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <BrowserRouter>
      <Routes>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/" element={<Home/>}/>
      
      </Routes>
    </BrowserRouter>
    <BottomButtons/>
    </div>
  );
}

export default App;
