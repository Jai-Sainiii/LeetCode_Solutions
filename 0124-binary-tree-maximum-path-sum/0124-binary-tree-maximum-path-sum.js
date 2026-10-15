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
    function solve(node){
        if(node === null) return 0;

        let leftSum = Math.max(0, solve(node.left));
        let rightSum = Math.max(0, solve(node.right));

        max = Math.max(max, leftSum + rightSum + node.val);

        return node.val + Math.max(leftSum, rightSum);
    }
    solve(root);
    return max;
};