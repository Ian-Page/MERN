import React from 'react';
import './App.css';
/*import Header from './components/Header';*/
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/*may not need link ^ */
import Chat from './components/Chat';
import Home from './components/Home';
import Profile from './components/Profile';
/* import BottomButtons from './components/BottomButtons';*/
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/home" element={<Home/>}/>
      
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
