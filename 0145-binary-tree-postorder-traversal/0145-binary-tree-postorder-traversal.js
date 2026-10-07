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
    let postOrder = [];
    if(root === null) return postOrder;
    let st1 = [], st2 = [];
    st1.push(root);
    while(st1.length){
        let node = st1.pop();
        st2.push(node.val);
        if(node.left !== null) st1.push(node.left);
        if(node.right !== null) st1.push(node.right);
    }
    while(st2.length){
        postOrder.push(st2.pop());
    }
    return postOrder;
};