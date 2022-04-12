import Person from './components/Person.js';
import './App.css';

const peopleArr = [
  {
  lastName:"Bones",
  firstName:"Bare",
  Age: 99,
  hair:"bald",
  image: 'https://i.ebayimg.com/thumbs/images/g/V~QAAOSwK6phsyTP/s-l200.jpg'
},
  {
  lastName:"Rabit",
  firstName:"Rodger",
  Age: 21,
  hair:"white",
  image: 'https://i.pinimg.com/236x/0b/e0/87/0be087cf7d4439799e30a6177ef182d3--rabbit-wallpaper-roger-rabbit.jpg'
},
  {
  lastName:"Willis",
  firstName:"Bruce",
  Age: 67,
  hair:"bald",
  image: 'http://images5.fanpop.com/image/photos/24600000/Bruce-Willis-bruce-willis-24646066-200-200.jpg'
},
{
  lastName:"Peterson",
  firstName:"Jordan",
  Age: 65,
  hair:"grey",
  image: 'https://sjdowntown.com/wp-content/uploads/DrJordanPeterson_200aa_8Stl.jpeg'
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
          hair={personObj.hair}
          image={personObj.image}/>
          ))}
      </div>
    </div>
    );}
    


export default App;