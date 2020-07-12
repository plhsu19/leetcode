# Iteratively Solution

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        
        #check if the linked list is empty, ie, head = None
        if not head: #redundant
            return head
        
        pre = head #redundant
        node = head.next
        head.next = None
        
        while node:
            nextNode = node.next
            node.next = pre
            pre = node
            node = nextNode
        
        return pre