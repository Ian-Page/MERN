import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithims from './sortingAlgorithims'


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = .5;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 900;
//this is the main color of array bars duhhhh
const PRIMARY_COLOR ='indigo';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR ='lime';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super (props);

        this.state = {
            array: [],
        };
    }

componentDidMount(){
    this.resetArray();
    }

resetArray(){
    const array = [];
    for (let i = 0; i < 300; i++){
        array.push(randomIntFromInterval(0, 300));
        }
        this.setState({array});
        
    }
mergeSort(){
    const animations = sortingAlgorithims.getmergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 6;
        if (isColorChange){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);

            setTimeout(()=>{
                const [barOneIdx,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }


}
quickSort(){

}
heapSort(){

}
bubbleSort(){

}
render(){
    const {array} = this.state;

    return(
        <div>
        <div className="array-container">
        {array.map((value,idx) =>(
            <div className="array-bar"
            key={idx}
            style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value}px`
            }}>
            </div>
            
            
        ))}
        </div>
        <div className='buttons-row'>
        <div className='button-row'>
        <button onClick={()=> this.resetArray()}>Generate A New Array</button>
        </div>
        <div className='button-row'>
        <button onClick={()=> this.mergeSort()}>Merge Sort</button>
        </div>
        <div className='button-row'>
        <button onClick={()=> this.quickSort()}>Quick Sort</button>
        </div>
        <div className='button-row'>
        <button onClick={()=> this.heapSort()}>heapSort Sort</button>
        </div>
        <div className='button-row'>
        <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
        </div>
        

        </div>
        </div>

        
    );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor (Math.random() * (max-min + 1 )+ min);
}
//function arraysAreEqual(arrayOne, arrayTwo){
  // if (arrayOne.length !== arrayTwo.length) return false;
  ///    if (arrayOne[i] !== arrayTwo[i]) return false;
  //}
  //return true;

    
//}