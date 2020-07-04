# One-pass solution: improved version
# Runtime: O(n)
# space comsumption: O(1)

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxPro = 0
        minBuyPrice = float('inf')
        
        if not prices:
            return 0
        
        for price in prices:
            minBuyPrice = min(price, minBuyPrice)
            pro = price - minBuyPrice
            maxPro = max(pro, maxPro)
            
        return maxPro