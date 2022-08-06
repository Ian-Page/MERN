myName = "Beth"
function sayMyName( ) 
{
    
    console.log("My name is Martin");
    
    if(myName == "Martin")
    {
        console.log("Hey there Martin, how's it going?");
    }

    else
    {
        console.log("Greetings Earthling. Have a great day!");
    }


if(myName == "Martin")
{
    console.log("Hey there Martin, how's it going?");
}
else if(myName == "Beth")
{
    console.log("You look fabulous today!");
}
else
{
    console.log("Greetings Earthling. Have a great day!");
}
}
sayMyName();

//     A ;         B ;         D
for (var num = 1; num < 6; num = num + 1)
{
    // C
    console.log("I'm counting! The number is ", num);
}
// E
console.log("We are done. Goodbye world!");

var num = 1;
while(num < 5)
{
    if(num == 3)
    {
        break;
        // if you have code here, it will never run!
    }
    console.log("I'm counting! The number is ", num);
    num = num + 1; // if we break, these lines won't run
}
//I'm counting! The number is 1
//I'm counting! The number is 2 

//The below counts from 1 to 4, printing something about each number, but completely forgets about 3, 
//because when num == 3, a continue skips the rest of the loop and proceeds (after adding 1 to num).
//
for(var num = 1; num < 5; num += 1)
{
    if(num == 3)
    {
        continue;
        // if you have additional code down here, it will never run!
    }
console.log("I'm counting! The number is ", num);
}
//I'm counting! The number is 1
//I'm counting! The number is 2
//I'm counting! The number is 4

//The below counts from 1 to 4, printing something about each number, but completely forgets about 3, because when num == 3,
// a continue skips the rest of the loop and proceeds (after adding 1 to num).
for(var num = 1; num < 5; num += 1)
{
    if(num == 3)
    {
        continue;
        // if you have additional code down here, it will never run!
    }
console.log("I'm counting! The number is ", num);
}
//I'm counting! The number is 1
//I'm counting! The number is 2
//I'm counting! The number is 4