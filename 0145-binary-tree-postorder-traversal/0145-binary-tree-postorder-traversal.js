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
var postorderTraversal = function(root) {
    let ans = [];
    if(!root) return [];
    let st1 = [root];
    let st2 = [];
    while(st1.length){
        let node = st1.pop();
        st2.push(node);
        if(node.left){
            st1.push(node.left);
        }
        if(node.right){
            st1.push(node.right);
        }
    }
    while(st2.length){
        ans.push(st2.pop().val);
    }
    return ans;
};