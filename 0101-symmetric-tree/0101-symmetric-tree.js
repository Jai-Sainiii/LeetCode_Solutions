/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true
    
    function check(node1, node2){
        if(!node1 && !node2){
            return true
        }
        if(!node1 || !node2){
            return false
        }

        return (node1.val === node2.val) && check(node1.left, node2.right) && check(node1.right, node2.left)
    }

    return check(root.left, root.right)
};