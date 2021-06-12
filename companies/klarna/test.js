const array = [2, 3, 5];

const objectSymbols = Object.getOwnPropertySymbols(array)
console.log(typeof array[Symbol.iterator])
