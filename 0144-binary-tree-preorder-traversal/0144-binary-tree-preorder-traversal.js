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
var preorderTraversal = function(root) {
    let preorder = [];
    let curr = root;
    while(curr){
        if(!curr.left){
            preorder.push(curr.val);
            curr = curr.right;
        }else{
            let prev = curr.left;
            while(prev.right && prev.right !== curr){
                prev = prev.right;
            }

            if(!prev.right){
                prev.right = curr;
                preorder.push(curr.val);
                curr = curr.left;
            }else{
                prev.right = null;
                curr = curr.right;
            }
        }
    }
    
    return preorder;
};