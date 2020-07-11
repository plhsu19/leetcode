# solution using hash table, ie, set, with extra space O(n)

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        current = head
        s = set()
        cycle = False
        while True:
            if current == None:
                break
            elif current in s:
                cycle = True
                break
            else:
                s.add(current)
                current = current.next
        return cycle