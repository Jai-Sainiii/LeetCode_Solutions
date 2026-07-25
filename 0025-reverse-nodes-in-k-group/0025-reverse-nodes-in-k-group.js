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
var reverseKGroup = function(head, k) {
    function reverse(head){
        let prev = null
        let current = head
        while(current){
            let front = current.next
            current.next = prev
            prev = current
            current = front
        }
    }

    function calKNode(head, k){
        let current = head
        while(k > 0 && current){
            current = current.next
            k--
        }
        return k === 0 ? current : null
    }

    let current = head, prevNode = null, nextNode = null;
    while(true){
        let kNode = calKNode(current, k-1)
        if(!kNode){
            if(prevNode) prevNode.next = current
            break
        }

        nextNode = kNode.next
        kNode.next = null

        reverse(current)

        if(head === current){
            head = kNode
            prevNode = current
        }else{
            prevNode.next = kNode
            current.next = nextNode
            prevNode = current
        }

        current = nextNode
    }
    return head
};