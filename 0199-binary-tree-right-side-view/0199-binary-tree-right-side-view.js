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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = [];
    function solve(node, level){
        if(!node) return;

        if(level === ans.length) ans.push(node.val);

        if(node.right) solve(node.right, level+1);
        if(node.left) solve(node.left, level+1);
    }

    solve(root, 0);

    return ans;
};