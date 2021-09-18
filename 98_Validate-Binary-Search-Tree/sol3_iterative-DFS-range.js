/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const stack = [[root, -Infinity, Infinity]];
    
    while (stack.length > 0) {
        let [node, lower, upper]= stack.pop();
        
        // base-condition
        if (node === null) continue;
        
        // pre-order visit the current node
        if (node.val <= lower || node.val >= upper) {
            return false
        } else {
            stack.push([node.right, node.val, upper]);
            stack.push([node.left, lower, node.val]);
        }
    }
    return true;
};