import './App.css';
import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Params from './components/Params';




function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Link to={"/Home"}>Go to Home</Link>
    <Routes>
      <Route path ="/home" element ={<Home/>}/>
      <Route path ="/:word" element ={<Params/>}/>
      <Route path ="/:word/:color/:bgCol" element ={<Params/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
