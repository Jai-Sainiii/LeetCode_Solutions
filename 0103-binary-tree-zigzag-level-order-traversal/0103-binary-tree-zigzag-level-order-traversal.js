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
    let que = []
    let ans = []

    if(!root) return [];

    que.push(root);
    let flag = false

    while(que.length){
        let size = que.length;
        let level = [];
        for(let i = 0; i < size; i++){
            let node = que.shift();

            const index = flag ? size - 1 - i : i
            level[index] = node.val;

            if(node.left) que.push(node.left);
            if(node.right) que.push(node.right);
        }

        ans.push(level);

        flag = !flag;
    }

    return ans;
};