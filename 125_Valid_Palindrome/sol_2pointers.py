# solution 1 for 2 pointers solution
# practice only using ord to determine if a char is alphebatic numeric
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        
        while left < right:
            if not self.isAlnum(s[left]):
                left += 1
                continue
            if not self.isAlnum(s[right]):
                right += -1
                continue
            if s[left].lower() == s[right].lower():
                left += 1
                right += -1
            else:
                break
            
        return left >= right
                
            
    def isAlnum(self, c):
        c_i = ord(c)
        if c_i <= ord('z') and c_i >= ord('a'):
            return True
        elif c_i <= ord('9') and c_i >= ord('0'):
            return True
        elif c_i <= ord('Z') and c_i >= ord('A'):
            return True
        return False

