# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # not head: for empty list
        # not head.next: for reach the end of the original list
        if not head or not head.next:
            return head
        reverseHead = self.reverseList(head.next)
        head.next.next = head
        #remember to set the current node.next to None in case the current node is the ead of original linked list
        head.next = None
        
        return reverseHead