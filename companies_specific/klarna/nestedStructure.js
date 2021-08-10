
// object to be flattened
const obj = {
    data: 'oh',
    next: {
        data: 'hello',
        next: {
            data: 'world',
            next: {
                data: '!',
                next: {
                    data: '!',
                    next: null,
                },
            },
        },
    },
};

function findLastThree(obj) {

    const array = new Array();
    find(obj, array);

    return array.slice(-3,);

}

function find(node, array) {
    // baseline
    if (!node) { // more general than node !== null
        return
    }

    if (node.data) { // ensure node.data is not null or undefined
        array.push(node.data);
    }

    find(node.next, array);
}

// unit test
console.log(findLastThree(obj));
  // expect: [ 12.7, 'check', 33 ]