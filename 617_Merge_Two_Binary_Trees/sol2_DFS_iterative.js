/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    // handle the case when the root1 node is null
    if (root1 === null) {
        return root2;
    }
    
    const stack = [[root1, root2]];
    
    while(stack.length) {
        const nodes = stack.pop();        
        
        // base condition: node 1 is not null, node 2 is null
        if (nodes[1] === null) {
            continue;
        }
        
        // node1 and node2 are both not null => add val
        nodes[0].val += nodes[1].val;
        
        // children condition
        if (nodes[0].left === null) {
            nodes[0].left = nodes[1].left;
        } else {
            stack.push([nodes[0].left, nodes[1].left])
        }
        
        if (nodes[0].right === null) {
            nodes[0].right = nodes[1].right;
        } else {
            stack.push([nodes[0].right, nodes[1].right])
        }
    }
    
    return root1;
};
