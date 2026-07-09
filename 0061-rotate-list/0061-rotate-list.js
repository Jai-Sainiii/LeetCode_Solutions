/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0 ) return head

    let length = 1
    let tail = head
    while(tail.next){
        tail = tail.next
        length++
    }

    tail.next = head

    k = k % length
    let steps = length-k
    let newtail = head
    for(let i = 1; i < steps; i++){
        newtail = newtail.next
    }

    let newHead = newtail.next
    newtail.next = null

    return newHead
};