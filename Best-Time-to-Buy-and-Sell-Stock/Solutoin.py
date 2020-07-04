# One-pass solution
# Runtime: O(n)
# space comsumption: O(1)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        minPricePast = prices[0]
        maxProf = 0
        for i, price in enumerate(prices[1:]):
            prof = price - minPricePast
            if prof > maxProf:
                maxProf = prof
            if price < minPricePast:
                minPricePast = price
        return maxProf