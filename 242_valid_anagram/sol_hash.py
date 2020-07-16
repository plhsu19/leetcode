# hash table solution
class Solution:
    # solution 1: List as hashtable, char -> unicode as key
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        # hash table + 1 pass solution
        hash1 = [0]*26
        
        for i in range(len(s)):
            hash1[ord(s[i]) - ord('a')] += 1
            hash1[ord(t[i]) - ord('a')] += -1
        
        for count in hash1:
            if count != 0:
                return False
        return True
    # solution 2: dict as hashtable, char as hash key
    # faster and less memory consumption solution
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        dict1 = {}
        
        for i in range(len(s)):
            if not s[i] in dict1:
                dict1[s[i]] = 1
            else:
                dict1[s[i]] += 1
            
            if not t[i] in dict1:
                dict1[t[i]] = -1
            else:
                dict1[t[i]] += -1
        
        for c in dict1:
            if dict1[c] != 0:
                return False
        
        return True