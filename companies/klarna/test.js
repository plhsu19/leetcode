const array = ['3', '5', '35'];

for (item of array) {
    item = Number.parseInt(item);
    console.log(typeof item);
}

console.log(typeof array[1])
console.log(parseInt('08'))