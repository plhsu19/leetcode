class Solution:
    def romanToInt(self, s: str) -> int:
        hashTable = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C':100,
                    'D': 500, 'M': 1000}
        
        sum, pre = 0, 0
        
        for c in s:
            cur = hashTable[c];
            sum += cur;
            
            if (cur > pre):
                sum -= pre * 2;
            pre = cur;
        
        return sum;