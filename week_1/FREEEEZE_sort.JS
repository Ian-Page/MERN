const arr = [1,2,3,4];
arr.push(300,400);
console.log(arr)

//onst array = Object.freeze([1,2,3,4]);
//array.push(300);
//console.log(array)

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];


console.log(needThyme)
console.log(gotTheThyme)
console.log(notNeceCelery)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
//items.sort(); // this will throw an error 

console.log(sortedItems)

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );
console.log(numbers)
console.log (sortedGroceries)
// this will return [10, 12, 22, 3, 5, 8 ]

