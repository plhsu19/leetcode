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
    let pre = -Infinity;
    
    function check(node) {
        // base condition
        if (node === null) return true;
        
        // visit left child
        if (!check(node.left)) return false;
        
        // in-order visit current node
        if (node.val > pre) {
            pre = node.val;
        } else {
            return false;
        }
        
        // visit right child
        if(!check(node.right)) return false;
        
        return true;
    }
    
    return check(root);
};