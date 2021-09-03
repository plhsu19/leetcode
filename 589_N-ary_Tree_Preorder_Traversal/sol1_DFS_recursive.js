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
    // base-condition:
    if (root === null) return [];
    
    // pre-order traversal:
    let result = [root.val];
    
    // visit children nodes
    for (let child of root.children) {
        result = [...result, ...preorder(child)];
        // using concate is alos ok:
        // result = [].concat(result, preorder(child));
    }

    
    
    return result;
};
