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
    let node = obj

    while(node) {
        if (node.data) {
            array.push(node.data);
        }
        node = node.next;
    }

    return array.slice(-3, )
}

// unit test
console.log(findLastThree(obj));
  // expect: [ 12.7, 'check', 33 ]