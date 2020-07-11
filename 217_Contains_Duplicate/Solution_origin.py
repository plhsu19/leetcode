# hash table: origin
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        s = set()
        for num in nums:
            if not num in s:
                s.add(num);
            else:
                return True
        return False