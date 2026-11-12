/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function solve(node){
        if(node === null || node === p || node === q) return node;

        let left = solve(node.left);
        let right = solve(node.right);

        if(left === null) return right;
        else if(right === null) return left;
        else return node;
    }

    return solve(root);
};