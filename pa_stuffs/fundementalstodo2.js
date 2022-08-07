//Create a function that accepts a number as an input. Return a
// new array that counts down by one, from the number (as array’s ‘zeroth’ element)
 // down to 0 (as the last element). How long is this array? 

function arrCountDwn(num) {

    var arr = [];
    for (var i = num; i >= 0; i--){
        //console.log(i);
        
        arr.push(i);
    }
        console.log(arr);



}
arrCountDwn(9);

//Print and Return

//Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(num1, num2){

    var arr = []
    arr.push(num1);
    arr.push (num2);
    console.log(num1);
    return num2;
}
console.log (printReturn(6, 7));

//First Plus Length

//Given an array, return the sum of the first value in the array, 
//plus the array’s length. What happens if the array’s first value is not
// a number, but a string (like "what?") or a boolean (like false). 
var input=[1,2,3,4];
function firstPlus(arr){


    return arr[0] + arr.length;

}
console.log(firstPlus(input));

//Values Greater than Second

//For [1,3,5,7,9,13], print
// values that are greater than its 2nd value. Return how many values this is. 
var array = [1,3,5,7,9,13];
function greaterThanScnd(input){
    var count = 0 
    for (var i = 0; i < input.length; i++){
        if(input [i] > input [1]){
            count++;
            console.log(input[i]);
        }
    }
    return count;


} 
console.log(greaterThanScnd(array));

//This Length, That Value

//Given two numbers, return array of length num1 with each value num2. 
//Print "Jinx!" if they are same. 

function lengthValue(num1 ,num2){
    //check to see if num 1 and num2 == if they are console.log "jynx"
    if (num1 === num2){
        return("jinx");
    }
    //intialize empty array
    var arr = [];
    //loop num1 times
    for (var i = 0; i < num1; i++){
        //in for loop push num2 into empty array
        arr.push (num2);
    }
    //return full array
    return arr;
}
console.log (lengthValue(5,2));



//Your function should accept an array. If value at [0] is greater than array’s 
//length, print "Too big!"; if value at [0] is less than array’s length, print
// "Too small!"; otherwise print "Just right!"
var arrinput = [4,2,5,8];
function arrayLenght(arrinput){
    
    if (arrinput[0] > arrinput.length){
        return "too big";
    }
    if (arrinput[0] < arrinput.length){
        return "too small";
    }
    else{
        return "just right";
    }
    
}
console.log(arrayLenght(arrinput));

//Fahrenheit to Celsius

//Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius
//(fDegrees) that accepts a number of degrees in Fahrenheit and returns
// the equivalent temperature as expressed in Celsius degrees. For review, 
//Fahrenheit = (9/5 * Celsius) + 32.

var fDegrees = 72
function convertFTemp(fDegrees){
    return fDegrees = (fDegrees -32)  * 5 / 9;

}
console.log("the degree's in celsius is " + convertFTemp(fDegrees));

//Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
//and returns the equivalent temperature expressed in Fahrenheit degrees. 

var cDegrees = 22.2
function convertCTemp(cDegrees){
    return cDegrees = cDegrees * 9 / 5 + 32;

}
console.log("the degree's in farenheight is " + convertCTemp(cDegrees));