# One-pass hash table solution
# Runtime: O(n)
# space comsumption: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for i, num in enumerate(nums):
            c = target - num
            if c not in dict.keys():
                dict[num] = i
            else:
                return[dict[c], i]
