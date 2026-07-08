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
    let d1 = headA
    let d2 = headB
    while(d1 !== d2){
        d1 = d1 === null ? headB : d1.next
        d2 = d2 === null ? headA : d2.next
    }
    return d1
};