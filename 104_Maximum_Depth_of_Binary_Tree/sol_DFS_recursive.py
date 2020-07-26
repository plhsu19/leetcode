# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        #base case
        if root == None:
            return 0
        subDepth1 = self.maxDepth(root.left)
        subDepth2 = self.maxDepth(root.right)
        Depth = 1 + max(subDepth1, subDepth2)
        return Depth
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
