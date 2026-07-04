/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head
    if(current.next === null) return current
    
    let count = 0
    while(current){
        count++
        current = current.next
    }
    let mid = Math.floor(count/2)

    current = head
    count = 0
    while(count !== mid){
        count++
        current = current.next
    }
    return current
};