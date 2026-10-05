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
var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    let node = root;
    while(true){
        if(node !== null){
            stack.push(node);
            node = node.left;
        }else{
            if(stack.length === 0) break;
            let ele = stack.pop();
            ans.push(ele.val);
            node = ele.right;
        }
    }
    return ans;
};