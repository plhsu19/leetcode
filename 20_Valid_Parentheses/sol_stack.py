# solution with hard-code the mapping of bracket types
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        state = True
        for c in s:
            if c == '(' or c == '[' or c == '{':
                stack.append(c)
            elif (c == ')' or c == ']' or c == '}') and stack:
                p = stack.pop()
                if c ==')' and p != '(':
                    return False
                if c == ']' and p != '[':
                    return False
                if c == '}' and p != '{':
                    return False
            else:
                return False
        if stack:
            state = False
        return state