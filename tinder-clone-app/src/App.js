import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/*may not need link ^ */
import Chat from './components/Chat';
import Home from './components/Home';
import Profile from './components/Profile';
import BottomButtons from './components/BottomButtons';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/" element={<Home/>}/>
      
      </Routes>
    </BrowserRouter>
    <BottomButtons/>
    </div>
  );
}

export default App;
