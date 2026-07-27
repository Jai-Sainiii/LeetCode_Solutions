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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    function maxSum(node){
        if(node === null) return 0
        let left = Math.max(0, maxSum(node.left));
        let right = Math.max(0, maxSum(node.right));
        max = Math.max(max, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    maxSum(root);
    return max;
};