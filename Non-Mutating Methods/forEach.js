// Similar Example from Cheatsheet Reference (JavaScript Arrays Reference Cheat Sheet and Breakdown — Non-Mutating Methods)
const numbers = [1,2,3,4,5,6,7,8,9,10]
let counter = 0;

const newArray = numbers.forEach(num => {
    counter += num;
});

console.log(newArray);
// undefined
console.log(counter);
// 55 