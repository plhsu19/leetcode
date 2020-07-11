# divide & conquer solution
# original version

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        return self.maxSubSum(nums, 0, len(nums) - 1)
    
    def maxSubSum(self, nums, minId, maxId):
        # base case: only one item in the array
        if minId == maxId:
            return nums[minId]
        
        med = minId + int((maxId-minId)/2)
        
        # case1: calculate the max sum in the left subarray
        maxLeft = -float('inf')
        if (med > minId):
            maxLeft = self.maxSubSum(nums, minId, med - 1)
        
        # case2: calculate the max sum in right subarray
        maxRight = -float('inf')
        if(med < maxId): # actually is redundant
            maxRight = self.maxSubSum(nums, med + 1, maxId)
            
        # case3: calculate the max sum in the cross array including the nums[med]
        maxCrossLeft = maxCrossRight = -float('inf')
        contiLeft = contiRight = 0
        for num in nums[med : maxId + 1]:
            contiLeft += num;
            maxCrossLeft = max(maxCrossLeft, contiLeft)
        for i in range(med, minId-1, -1):
            contiRight += nums[i]
            maxCrossRight = max(maxCrossRight, contiRight)
        
        maxCross = max(maxCrossLeft, maxCrossRight, (maxCrossLeft + maxCrossRight - nums[med]))
        # return the max sum in the current array (among left, right, cross subarrays)
        return max(maxLeft, maxRight, maxCross)
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        