// object to be flattened
const obj = {
    data: '123',
    next: {
        data: 'qwe',
        next: {
            data: 12.7,
            next: {
                data: 'check',
                next: {
                    data: 33,
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