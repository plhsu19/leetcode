class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        contiSum = 0
        maxSum = -float('inf')
        
        for num in nums:
            contiSum = max(contiSum + num, num)
            maxSum = max(maxSum, contiSum)
            
        return maxSum

# similar approach
# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
        
#         contiSum = maxSum = nums[0]
        
#         for i in range(1, len(nums)):
#             contiSum = max(contiSum + nums[i], nums[i])
#             maxSum = max(maxSum, contiSum)
            
#         return maxSum