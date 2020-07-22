class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = [c for c in s if c.isalnum()]
        
        ls = len(string)
        mid = ls//2
        
        for i in range(mid):
            if string[i].lower() != string[ls - 1 - i].lower():
                return False
        return True