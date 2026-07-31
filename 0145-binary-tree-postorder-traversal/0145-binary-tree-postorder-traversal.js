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
    let ans = []
    if(!root) return ans;

    let stack = []
    let curr = root
    while(curr || stack.length){
        if(curr){
            stack.push(curr)
            curr = curr.left
        }else{
            let node = stack[stack.length-1].right
            if(node){
                curr = node
            }else{
                node = stack.pop()
                ans.push(node.val)
                while(stack.length && node === stack[stack.length-1].right){
                    node = stack.pop()
                    ans.push(node.val)
                }
            }
        }
    }

    return ans;
};