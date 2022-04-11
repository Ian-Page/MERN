import Person from './components/Person.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>PROP IT UP!</h1>
      <Person
        lastname={"Bones"}
        firstname={"Lumpy"}
        age={99}
        hair={"bald"}
      />
      <Person
        lastname={"Rabit"}
        firstname={"Rodger"}
        age={23}
        hair={"white"}
      />
      <Person 
        lastname={"Luck"}
        firstname={"Dumb"}
        age={21}
        hair={"Blonde"} 
      />
      <Person
        lastname={"Peterson"}
        firstname={"Jordan"}
        age={65}
        hair={"grey"}
      />
      </div>
    </div>
  );
}

export default App;
