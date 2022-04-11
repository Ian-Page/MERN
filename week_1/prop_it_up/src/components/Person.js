import React from 'react';

const Person = (props) => {
    const { firstname, lastname, hair} = props;

    return (
        <div className='minibox'>
            <h2>{lastname},{firstname}</h2>
            <p>age: {props.age}</p>
            <p>Hair Color: {hair}</p>
        </div>
    );
}
export default Person;
