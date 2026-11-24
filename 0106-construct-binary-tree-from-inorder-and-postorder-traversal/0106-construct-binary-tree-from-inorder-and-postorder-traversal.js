/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let inOrder = new Map();
    inorder.map((node, i) => inOrder.set(node, i));

    function solve(postStart, postEnd, inStart, inEnd){
        if(postStart < postEnd || inStart > inEnd) return null;

        let root = new TreeNode(postorder[postStart]);

        let inRoot = inOrder.get(root.val);
        let numsRight = inEnd - inRoot;

        root.left = solve(postStart - numsRight - 1, postEnd, inStart, inRoot - 1);
        root.right = solve(postStart - 1, postStart - numsRight, inRoot + 1, inEnd);

        return root;
    }

    return solve(postorder.length-1, 0, 0, inorder.length-1);
};