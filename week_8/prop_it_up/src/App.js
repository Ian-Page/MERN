

import React from "react";
import "./App.css";
import PersonCard from "./components/Person";

function App() {
  return (
    <div className="App">
      <h1>PUTTING IT TOGETHER</h1>
      <p>
      <PersonCard
        lastName={"Pain"}
        firstName={"Max "}
        age={19}
        hair={"bald"}
      />
      </p>
      <p>
      <PersonCard
        lastName={"Rocker"}
        firstName={"Nugget"}
        age={26}
        hair={"red"}
      />
      </p>
      <p>
      <PersonCard 
        lastName={"Bond"}
        firstName={"James"}
        age={39} 
        hair={"black"} />
      </p>
      <p>
      <PersonCard
        lastName={"Sopranno"}
        firstName={"Tony"}
        age={44}
        hair={"brown"}
      />
      </p>

    </div>
  );
}

export default App;
