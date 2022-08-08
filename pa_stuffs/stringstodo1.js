//Remove Blanks

//Create a function that, given a string, returns all of 
//that string’s contents, but without blanks. 
function removeBlanks(str){
    //make a new string initializd as a blank string
    let newStr = ' ' 
    //loop thru the given string
    for (let i =0; i < str.length; i++){
        //if current character is not a space
        if(str[i]!= ' '){
            //then concatenate with new string
            newStr += str[i]

        }
    }
    //return new string
    return newStr
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

//Examples:

//removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
//removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


//Get Digits

//Create a JavaScript function that given a string, 
//returns the integer made from the string’s digits. 
//You are allowed to use isNaN() and Number().

//Examples:
function getDigits(str){
    //make a new string
    let newNumStr =' '
    //for loop char in string
    for(let char in str){
        //if a charcter is a number
        if (!isNaN(str[char])){
            //concatenate into a new string
            newNumStr += str[char]
        }

    }
    return(Number(newNumStr))
}
console.log(getDigits("abc8c0d1ngd0j0!8"));

//getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


//Acronyms

//Create a function that, given a string, 
//returns the string’s acronym (first letter of the word capitalized).
// You are allowed to use .split() and .toUpperCase().

function acronym(str){
    let wordsArr = str.split (' ')
    let acronymStr =''

    //loop thru wordsArr
    for( let word in wordsArr){
        // grab the first letter of the word
        if (wordsArr[word].length > 0){
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr   
}

console.log(acronym(" there's no free lunch - gotta pay yer way. ")) 

//acronym("Live from New York, it's Saturday Night!") => "LFNYISN".


//Count Non-Spaces

//Create a function that, given a string, 
//returns the number of non-space characters found in the string. 

function countNonSpaces(str){
    // initialize counter variable
    let counter = 0
    //loop thru string
    for (let char in str){
        //if character is not a space
        if(str[char] != ' '){
            //increment counter
            counter++
        }
    }
    //return counter
    return counter
}
//Examples:

console.log(countNonSpaces("Honey pie, you are driving me crazy")) //=> 29
//countNonSpaces("Hello world !") => 11


//Remove Shorter Strings

//Create a function that, given an array of strings and a numerical 
//value, returns an array that only contains strings longer
// than or equal to the given value.

function removeShorterStrings(arr,len){
    //initialize new array
    let newStrings =[]
    // initialize nextindex counter
    let nextIndex = 0
    //loop thru array
    for( let value in arr){
        //if value is reater than or equal to len
        if(arr[value].length >= len){
            //add value to new array
            newStrings[nextIndex++] = arr[value]
        }

    }
    return newStrings

}

//Examples:

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
//removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']