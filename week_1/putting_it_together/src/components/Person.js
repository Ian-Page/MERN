import React, { useState } from "react";

const Person = (props) => {
    const { firstName, lastName, hair,age ,image} = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div className='minibox'>
            <div className="peroninfo">
            <h2>{lastName},{firstName}</h2>
            <p>age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button className="butt"onClick={() => setStateAge(stateAge + 1)}>
                Add a year to  {firstName} {lastName}'s age.
            </button>
            </div>
            <div className="circlepic">
            <img src={image} alt="" className="pic"/>
            </div>
        </div>
    );
}
export default Person;
