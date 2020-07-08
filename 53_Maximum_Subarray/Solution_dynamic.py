class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = -float('inf')
        contiSum = 0
        for num in nums:
            if contiSum + num >= num:
                contiSum += num
            else: 
                contiSum = num
            if contiSum > maxSum:
                maxSum = contiSum
        return maxSum