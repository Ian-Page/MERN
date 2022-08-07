//Push Front

//Given an array and an additional value, insert this value at the beginning of the array.
//You may use .push(), you are able do this without it though!

//Examples:
//without .push
function pushFront(arr,val){
    for(let i = arr.length; i>=0; i--){
        arr[i =arr[ i-1] ];
    }
    arr[0] = val;
    return arr
}
console.log(pushFront([5,7,2,3],8))

//pushFront([5,7,2,3], 8) => [8,5,7,2,3]
//pushFront([99], 7) => [7,99]

//Pop Front

//Given an array, remove and return the value at the beginning of the array.
// Prove the value is removed from the array by printing it. You may use .pop(), 
//you are able do this without it though!

//Examples:
function popFront(arr){
    //save first value of array
    let firstValue = arr[0];
    //lopp thru array shifting all values to the left
    for (let i =0; i < arr.length; i++){
        arr[i]= arr[i + 1]
    }
    //decrease the length of array by one
    arr.length = arr.length -1 ;
    //log array
    console.log(arr)
    ///return removed value
    return firstValue;
    
}
console.log (popFront([0,5,10,15]));

//popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
//popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

//Insert At

//Given an array, index, and additional value, insert the value into array at given index.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), 
//you are able do this without it though!

//Examples:
function insertAt(arr,index,value){
    //loop thru array shifting, 
    //values to the right until you get a given index
    for (let i = arr.length; i >= index; i--){
        arr[i] = arr[i -1]
    }
    arr[index] = value;
    return arr;
}
console.log(insertAt([100,200,5], 2 ,311));

//insertAt([100,200,5], 2, 311) => [100,200,311,5]
//insertAt([9,33,7], 1, 42) => [9,42,33,7]