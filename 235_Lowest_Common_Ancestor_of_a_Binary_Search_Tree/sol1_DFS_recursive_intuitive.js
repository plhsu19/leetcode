/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    
    let LCA;

    function findLca(node, low, hi) {
        // base-condition not likely to happen
        if (node === null) return false;
        // real base-condition: when p.val and q.val is not in the range
        if ((p.val <= low || p.val >= hi) &&
            (q.val <= low || q.val >= hi)) {
            return false;
        }
        
        // chech children node
        const leftResult = findLca(node.left, low, node.val);
        const rightResult = findLca(node.right, node.val, hi);
        
        // post-order check
        const currentResult = node.val === p.val || node.val === q.val;
        
        if (leftResult + rightResult + currentResult > 1) {
            LCA = node;
            return true;
        }
        
        return leftResult || rightResult || currentResult;
    }
    findLca(root, -Infinity, Infinity);
    
    return LCA;
};