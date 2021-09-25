var lowestCommonAncestor = function(root, p, q) {
    const stack = [root];
    const pV = p.val,
          qV = q.val;
    
    // iterate over nodes in tree
    while (stack.length) {
        
        const node = stack.pop();

        if (pV > node.val && qV > node.val) {
            stack.push(node.right);
        } else if (pV < node.val && qV < node.val) {
            stack.push(node.left) 
        } else {
            return node;
        }
    }
};