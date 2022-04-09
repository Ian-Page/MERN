//Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log (groceries)
console.log (groceryList)
//This will take a list of items and return an array of strings resembling html "list items"... 

const value = [1, 2, 3, 4, 5];
const cubes = value.map( val => `<li>${val**3}</li>` );
console.log(value)
console.log(cubes)
//filter()
const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 !== 0 ); //or === for evens
console.log(values)
console.log(evens)  

//If we want only the groceries that have the letter "o" in them we could write...
const groceriess = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceriess.filter( item => item.includes("o") );
console.log (groceriess)
console.log (oFoods)
//This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]
const valuess = [1, 2, 3, 4, 5];
const oddCubes = valuess.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log (valuess)
console.log (oddCubes)




