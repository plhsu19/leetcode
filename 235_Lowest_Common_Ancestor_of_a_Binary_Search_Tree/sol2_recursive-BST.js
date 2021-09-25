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

// nested recursion function
 var lowestCommonAncestor = function(root, p, q) {
    const pValue = p.val,
          qValue = q.val;
    let LCA;
    
    function findLca(node) {
        // dummy base condition, shouldn't meet in the problem setting
        if (node === null) return;
        
        // left child condition
        if (node.val > pValue && node.val > qValue) {
            findLca(node.left);
        } else if (node.val < pValue && node.val < qValue) {
            findLca(node.right);
        } else {
            LCA = node;
        }        
    }
    
    findLca(root);
    return LCA;
};

// official non-nested function implementation
var lowestCommonAncestor = function(root, p, q) {
    const rootV = root.val,
          pV = p.val,
          qV = q.val;
    
    // left, right and based condition
    if (pV > rootV && qV > rootV) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (pV < rootV && qV < rootV) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};