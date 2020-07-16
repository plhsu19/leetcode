
class Solution:
    # original sort solution, with redundant codes
    def isAnagram(self, s: str, t: str) -> bool:
        s_sorted = sorted(s)
        t_sorted = sorted(t)
        
        print(type(s_sorted[1]))
        print(s_sorted[0])
        
        
        s_sorted = "".join(s_sorted)
        t_sorted = "".join(t_sorted)
        
        return s_sorted == t_sorted

    # improved sort solution
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        return sorted(s) == sorted(t)