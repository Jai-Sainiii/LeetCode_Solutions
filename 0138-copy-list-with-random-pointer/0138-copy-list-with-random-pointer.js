/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let map = new Map()

    let current = head
    while(current){
        let newNode = new _Node(current.val, null, null)
        map.set(current, newNode)
        current = current.next
    }

    current = head
    while(current){
        let cloneNode = map.get(current)
        cloneNode.next = map.get(current.next) || null
        cloneNode.random = map.get(current.random) || null
        current = current.next
    }

    return map.get(head)
};