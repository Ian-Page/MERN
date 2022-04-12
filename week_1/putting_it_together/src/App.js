import Person from './components/Person.js';
import './App.css';

const peopleArr = [
  {
  lastName:"Bones",
  firstName:"Bare",
  Age: 99,
  hair:"bald"
},
  {
  lastName:"Rabit",
  firstName:"Rodger",
  Age: 21,
  hair:"white"
},
  {
  lastName:"Willis",
  firstName:"Bruce",
  Age: 67,
  hair:"bald"
},
{
  lastName:"Peterson",
  firstName:"Jordan",
  Age: 65,
  hair:"grey"
},
]

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>PUT IT TOGETHER</h1>
        {peopleArr.map((personObj, index) => (
        <Person
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.Age}
          hair={personObj.hair}/>
          ))}
      </div>
    </div>
    );}
    


export default App;