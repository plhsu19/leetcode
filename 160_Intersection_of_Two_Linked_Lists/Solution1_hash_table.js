/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    let nodeA = headA;
    let nodeB = headB;
    let nodeIntersect = null;
    
    while (nodeA !== null) {
        set.add(nodeA);
        nodeA = nodeA.next;
    }
    
    // find the first node in linked list B that in the set
    while (nodeB !== null) {
        if (set.has(nodeB)) {
            nodeIntersect = nodeB;
            break;
        }
        nodeB = nodeB.next;
    }
    return nodeIntersect;
};
