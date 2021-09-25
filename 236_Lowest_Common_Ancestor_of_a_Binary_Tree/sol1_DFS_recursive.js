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
    
    function findLca(node) {
        // base-condition
        if (node === null) return false;
        
        // if LCA is already found, no need to traverse the un-visited nodes/subtrees
        if (LCA) return false;
        
        // check left and right child
        const leftResult = findLca(node.left);
        const rightResult = findLca(node.right);
        
        // check the current node
        const currentResult = (node.val === p.val) || (node.val === q.val)
        
        // return based on the results of if the node and its sub-trees contains target values
        if (leftResult + rightResult + currentResult > 1) {
            LCA = node;
            return true;
        }
        
        return leftResult || rightResult || currentResult;
    }
    
    findLca(root);
    return LCA;
};