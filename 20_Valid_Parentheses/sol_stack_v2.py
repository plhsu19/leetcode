# solution using hash table, which will be slower than directly hard-code
# the mapping of opening and closing brackets with different types
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', ']': '[', '}': '{'}
        
        for c in s:
            if c in mapping: 
                # assign any character to the top call if stack is empty
                top = stack.pop() if stack else '#'
                
                if top != mapping[c]:
                    return False
            else:
                stack.append(c)
                
        return not stack