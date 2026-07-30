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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0

    let que = []
    que.push(root)

    let level = 1
    while(que.length){
        let size = que.length
        for(let i = 0; i < size; i++){
            let node = que.shift()
            if(!node.left && !node.right){
                return level 
            }
            if(node.left){
                que.push(node.left)
            }
            if(node.right){
                que.push(node.right)
            }
        }
        level++
    }
};