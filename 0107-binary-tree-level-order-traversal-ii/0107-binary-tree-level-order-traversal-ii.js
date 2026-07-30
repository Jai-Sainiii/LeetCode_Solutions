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
var levelOrderBottom = function(root) {
    let ans = []
    let que = []
    if(!root) return []
    que.push(root)
    while(que.length){
        let level = []
        let size = que.length

        for(let i = 0; i < size; i++){
            let node = que.shift()
            level.push(node.val)
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
        }

        ans.push(level)
    }

    return ans.reverse()
};