let x = 1;
let y = 2;
let z = 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);



const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];

        console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(beatles);             