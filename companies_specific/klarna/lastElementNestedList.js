const findElements = function(nestedObject) {
    const flattenArray = new Array();
    iterate(nestedObject, flattenArray);

    return flattenArray.slice(-3, );
}

function checkIterable(element) {
    if (element == null) return false;
    if ((typeof element[Symbol.iterator] === 'function') && (typeof element !== 'string')) {
        return true;
    } else {
        return false;
    }
}

function iterate(iterableObject, array) {
    for (const element of iterableObject) {
        if (checkIterable(element)) {
            iterate(element, array)
        } else {
            array.push(element);
        }
    }
}

// unit test
const list1 = [3, 5, 2, 'h', 'z', [29, 39, 40], 6]
const list2 = [2, 3, [4, 5, 8], [3, [5, 6, 29, 29, 'w', ['h', 'ell'], 50]], 'w', [[[[]]]]];
const list3 = [null, 3, 5, 'hey', [[3, 5, [325, 5], 20], 239], [8, undefined, undefined, null, [null, [[[undefined, null], [3]]]]], undefined]

console.log(findElements(list1));
// output: 39, 40, 6
console.log(findElements(list2));
// output: 'ell', 50, 'w'
console.log(findElements(list3));
// output: [ null, 3, undefined ]