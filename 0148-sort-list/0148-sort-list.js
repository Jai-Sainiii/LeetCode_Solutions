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
    if(head === null || head.next === null) return head

    function merge(list1, list2){
        let dummyNode = new ListNode(-1)
        let temp = dummyNode
        while(list1 && list2){
            if(list1.val <= list2.val){
                temp.next = list1
                list1 = list1.next
            }else{
                temp.next = list2
                list2 = list2.next
            }
            temp = temp.next
        }
        if(list1){
            temp.next = list1
        }else{
            temp.next = list2
        }
        return dummyNode.next
    }

    function findMiddle(head){
        if(head === null || head.next === null) return head

        let slow = head
        let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    let middle = findMiddle(head)

    let right = middle.next
    middle.next = null
    let left = head
    left = sortList(left)
    right = sortList(right)

    return merge(left, right)
};