class Node {
    constructor(val, left, right) {
        //const? let?
        this.val = (val === undefined ? null : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    addLeft(left) {
        if (left !== null) this.left = left;
    }

    addRight(right) {
        if (right !== null) this.right = right;
    }
}

var inorderTraversal = function(root) {
    const output = new Array();
    DFS(root, output);
    return output;
};

function DFS(node, output) {
    // baseline
    if (node === null) return false;
    
    // condition left
    DFS(node.left, output);
    // condition current
    output.push(node.val);
    // condition right
    DFS(node.right, output);
}


// unit test
// construct a simple binary tree
const root = new Node(1);
const node1 = new Node(2);
const leaf = new Node(3);

root.addRight(node1);
node1.addLeft(leaf);

console.log(inorderTraversal(root));
// expect output: [1, 3, 2]

console.log(inorderTraversal(null))
// output: []

const root2 = new Node(1);
const leaf2 = new Node(2);
root2.addLeft(leaf2);

console.log(inorderTraversal(root2));
// output: [2, 1]

















