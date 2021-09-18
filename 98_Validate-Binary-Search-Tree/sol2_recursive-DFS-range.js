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
    
    function check (node, lower = -Infinity, upper = Infinity) {
    // base condition
    if (node === null) return true;
    
    // pre-order check
    if (node.val <= lower || node.val >= upper) {
        return false;
    }
    
    // visit left and right children with updated limits
    return check(node.left, lower, node.val) && check(node.right, node.val, upper);
}
    
    return check(root);
};