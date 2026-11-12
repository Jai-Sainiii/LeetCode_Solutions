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
var widthOfBinaryTree = function(root) {
    let ans = 0;
    if(!root) return ans;

    let que = [];
    que.push([root, 0]);

    while(que.length){
        let size = que.length;
        let min = que[0][1];
        let first = 0, last = 0;
        for(let i = 0; i < size; i++){
            let node = que.shift();
            let curr_id = node[1]-1;

            if(i === 0) first = curr_id;
            if(i === size-1) last = curr_id;

            if(node[0].left) que.push([node[0].left, curr_id*2+1]);
            if(node[0].right) que.push([node[0].right, curr_id*2+2]);
        }
        ans = Math.max(ans, last-first+1);
    }

    return ans;
};