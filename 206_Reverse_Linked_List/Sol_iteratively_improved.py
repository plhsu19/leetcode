# improved iteratively Solution

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre = None
        node = head
        while node:
            nextNode = node.next
            node.next = pre
            pre = node
            node = nextNode
        return pre