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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    // base-condition: when the node is null, ie, at the bottom of the tree, ...
    // ...but the subRoot is not null
    if (root === null && subRoot !== null) {
        return false;
    }
    
    // pre-order check if the root tree equals subRoot tree
    const result = isEqual(root, subRoot);
    
    return result || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isEqual(r, t) {
    // base conditin: if one of (or both) root or target is null
    if (r === null && t === null) {
        return true;
    } else if (r === null || t === null) {
        return false;
    }
    
    // pre-order condition: check equalness
    const result = (r.val === t.val);
    
    // return result of pre-order check and the check result of children nodes
    return result && isEqual(r.left, t.left) && isEqual(r.right, t.right);
} 