/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let inOrder = new Map();
    inorder.map((node, i) => inOrder.set(node, i));

    function solve(preStart, preEnd, inStart, inEnd){
        if(preStart > preEnd || inStart > inEnd) return null;

        let root = new TreeNode(preorder[preStart]);

        let inRoot = inOrder.get(root.val);
        let numsLeft = inRoot - inStart;

        root.left = solve(preStart+1, preStart + numsLeft, inStart, inRoot-1);
        root.right = solve(preStart + numsLeft + 1, preEnd, inRoot+1, inEnd);

        return root;
    }

    return solve(0, preorder.length-1, 0, inorder.length-1);
};