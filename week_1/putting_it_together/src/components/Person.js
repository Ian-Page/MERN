import React, { useState } from "react";

const Person = (props) => {
    const { firstName, lastName, hair,age} = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div className='minibox'>
            <h2>{lastName},{firstName}</h2>
            <p>age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
}
export default Person;
