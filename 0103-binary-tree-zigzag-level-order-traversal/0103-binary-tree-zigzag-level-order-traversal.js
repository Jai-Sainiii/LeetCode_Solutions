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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let que = [];
    let ans = [];

    if(root === null) return ans;

    que.push(root);
    let flag = false;

    while(que.length){
        let level = [];
        let size = que.length;

        for(let i = 0; i < size; i++){
            let node = que.shift();

            if(node.right) que.push(node.right); 
            if(node.left) que.push(node.left); 

            level.push(node.val);
        }
        if(flag) ans.push(level);
        else ans.push(level.reverse());

        flag = !flag;
    }
    return ans;
};