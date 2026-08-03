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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while(curr && curr.next){
        if(curr.val === curr.next.val){
            while(curr.next && curr.val === curr.next.val){
                curr = curr.next;
            }
            prev.next = curr.next;
        }else{
            prev = prev.next;
        }
        curr = curr.next;
    }

    return dummy.next;
};