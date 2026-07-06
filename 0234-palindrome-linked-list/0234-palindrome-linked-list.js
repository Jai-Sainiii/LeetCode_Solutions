/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    function reverse(head){
        if(head === null || head.next === null) return head
        let current = head
        let prev = null
        while(current){
            let front = current.next
            current.next = prev
            prev = current
            current = front
        }
        return prev
    }

    if(head === null || head.next === null) return true

    let slow = head
    let fast = head

    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    let first = head
    let newHead = reverse(slow.next)
    let second = newHead

    while(second){
        if(first.val !== second.val){
            reverse(newHead)
            return false
        }
        first = first.next
        second = second.next
    }
    reverse(newHead)
    return true
};