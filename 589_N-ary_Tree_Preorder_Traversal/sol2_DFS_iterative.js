/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let result = [];
    let stack = [];
    
    if (root === null) return result;
    
    stack.push(root);
    
    while (stack.length > 0) {
        let currentN = stack.pop();
        
        result.push(currentN.val);
        
        // add children nodes into stacks
        for (let i = currentN.children.length - 1; i >= 0; i--) {
            stack.push(currentN.children[i]);
        }
    }
    return result;
};