import React from 'react';
const BoxDisplay = (props) => {

    const {BoxArray} = props ;

    return (
        <div className='boxes'>
        {
            BoxArray.map((box, index) => (
            <div key={index} style={{ 
                display: "flex",
                margin: "10px",
                height: box.size, 
                width: box.size, 
                backgroundColor: box.color
                }}>
            </div>
            ))
        }
        </div>
    );
    }
    
    export default BoxDisplay;
