/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0
    let current = head
    while(current){
        length++
        current = current.next
    }
    if(length === n){
        return head.next
    }
    length = length-n-1
    current = head
    while(length>0){
        current = current.next
        length--
    }
    current.next = current.next.next
    return head
};