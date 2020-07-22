import collections

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower() # could do the lowecase operation with the one-pass loop
        q1 = collections.deque() #iterate through string is enough
        q2 = collections.deque()
        
        for char in s:
            asc = ord(char)
            if (asc <= 122 and asc >=97) or (asc <= 57 and asc >=48): # use ord()
                q1.append(char)
                q2.appendleft(char)
        
        return q1 == q2