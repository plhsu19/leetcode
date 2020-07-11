import sys
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        return self.helper(nums, 0, len(nums) - 1)
    
    def helper(self, nums, l, r):
        # base case: the rigt > left index, no items in the array
        if (l > r):
            return -sys.maxsize
        
        m = (l + r)//2
        # case1: calculate the max sum in left subarray
        leftMax = self.helper(nums, l, m - 1)
        
        #case2: calculate the max in right subarray
        rightMax = self.helper(nums, m + 1, r)
        
        #case3: cal the max sum of cross subarray including nums[m]
        leftSuffixMax = rightSuffixMax = 0
        contiSum = 0
        # get max left suffix sum
        for i in range(m + 1, r + 1):
            contiSum += nums[i]
            leftSuffixMax = max(leftSuffixMax, contiSum)
        # get max right suffix sum
        contiSum = 0
        for i in reversed(range(l, m)):
            contiSum += nums[i]
            rightSuffixMax = max(rightSuffixMax, contiSum)
        crossMax = nums[m] + leftSuffixMax + rightSuffixMax
        
        return max(leftMax, crossMax, rightMax)
        
    
        
        
        
        
        
        
        
        
        