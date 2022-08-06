function nameSwap(){
    myNumber = 42;
    myName = "Ian";

    if (myName == "Ian")
    {
        console.log ('this is your name '+ myNumber);
    }
    if (myNumber == 42)
    {
        console.log ("this is your age " + myName);
    }
}

nameSwap();

function counting56(){

    for (var num = -56; num < 1066; num+=1)
    //console.log("im counting" + num);
    if (num = 1066)
    {
        console.log("You have reached your goal " + num);
    }

}
counting56();

function beCheerfull(){

    for( var i = 1; i < 98; i+=1)
    {
        console.log("good morning!");
    }
}
beCheerfull();

//The number which returns 0 as the remainder when it is divisible by 3. So we check the remainder is equal to 0. if this condition satisfied console.log will print the number which is divisible by 3. 
//if you need to push the numbers into new array
function multiplesOf3(){
    var number = 42;
for (var i = -300; i <= 0; i++) {
    //skip -3 , -6
    if(i === -3)
    {
        continue;
    }
    if(i === -6)
    {
        continue;
    }
    if (i% 3 === 0) {
    console.log(i);
    }
}
}
multiplesOf3();

//Print integers from 2000 to 5280, using a WHILE.

function WhileIntPrint() {

    var num = 2000;
    while(num < 5200)
    { 
        if(num == 5200)
        {
            break;
        }
        console.log(num)
        num = num +1;
    }
}
WhileIntPrint();

function Birthday(){
    birthday = "6/14";
    if (birthday == "6/14")
    {
    console.log("how did you guess")
    }
    else
    {
    console.log("just another day")
    }
}
Birthday();

function leapYear(){
    year = 1964


    
        if (year% 4 === 0) {
        console.log("its a leap year!");
        }
        if (year% 4 != 0) {
            console.log("its a regular year!");
        }
        if (year% 400 === 0){
            console.log("its a leap year!");
        }
        
}

leapYear();

function printCount(){
    var count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 == 0){
            console.log(i);
            count++;
        }
    }
    console.log(`There are ${count} multiples of 5`);
}

printCount();

function multiple6(){
//not sure cant waste time...
}

function int100(){

    for(var i = 1; i <= 100; i++){
        {
        console.log(i)
        }
        if(i % 5 == 0){
            console.log("coding");
        }
        if(i % 10 == 0){
            console.log("dojo");
        }
    }
}
int100();

///function inComing(){
//    incoming = 5;

//    if(incoming = 5)
 //   [
 //       console.log(incoming);
 //   ]
 //   
//}
//inComing();

//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut? 
function addInter(){
    for (var i = -300000; i < 300000; i++){

        if (i %2 == 0){
            sum = i+i;
        }
        {
            console.log(sum);
        }
    }
//not sure if this is correct

}
addInter();

//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. 
function logPositive(){
    var number = 2016;
    while ( number > 0)
    {
    number - 4;
    if(number == 0) 
    {
        break;
    }
    console.log(number)
    number = number -4;
}
}
logPositive();
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of 
//mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines). 

function countmult(lowNum,highNum,mult){
    
    

    for (var i = highNum; i > lowNum; i--){
        if (i %mult == 0){
        console.log(i)
        }
    }
}
countmult(2,9,3);
//This is based on “Flexible Countdown”. The parameter names are not as helpful, 
//but the problem is essentially identical; don’t be thrown off! Given 4 parameters 
//(param1,param2,param3,param4), print the multiples of param1, 
//starting at param2 and extending to param3. One exception: if a multiple is equal to param4, 
//then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9),
// print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).


function flexCount(mult,startNum,endNum,skipNum){

    while(startNum < endNum){
        
        if(startNum %mult == 0 && startNum != skipNum){
            console.log(startNum);
        }
        startNum++
    }
}
flexCount(3,5,17,9);