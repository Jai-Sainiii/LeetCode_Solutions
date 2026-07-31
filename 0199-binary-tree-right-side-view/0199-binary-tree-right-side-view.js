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
    if(!root) return [];

    let ans = [];
    function rightView(node, level){
        if(!node) return;

        if(level === ans.length) ans.push(node.val);

        if(node.right) rightView(node.right, level+1);
        if(node.left) rightView(node.left, level+1);
    }

    rightView(root, 0);
    return ans;
};