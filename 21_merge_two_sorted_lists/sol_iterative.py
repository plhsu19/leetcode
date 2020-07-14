# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # check if empty list exists
        if not l1 and not l2:
            return None
        elif not l1:
            return l2
        elif not l2:
            return l1
        
        # decide the head
        node1, node2 = l1, l2
        head = None
        if node1.val > node2.val:
            head = node2
            node2 = node2.next
        else:
            head = node1
            node1 = node1.next
            
        pre = head
        
        # add the nodes in 2 lists in the merged list
        while node1 and node2:
            if node1.val > node2.val:
                pre.next = node2
                pre = node2
                node2 = node2.next  
            else:
                pre.next = node1
                pre = node1
                node1 = node1.next
        
         # concenate the remaining list to the merged list
        if node1:
            pre.next = node1
        else:
            pre.next = node2
            
        return head
            