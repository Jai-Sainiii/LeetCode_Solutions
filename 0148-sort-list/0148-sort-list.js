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
var sortList = function(head) {
    let arr = []
    let current = head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    arr.sort((a,b) => b-a)
    current = head
    while(current){
        current.val = arr.pop()
        current = current.next
    }
    return head
};