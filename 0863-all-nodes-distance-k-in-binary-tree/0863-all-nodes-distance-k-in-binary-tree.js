/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let parentMap = new Map();
    function parentCheck(){
        let que = [];
        que.push(root);

        while(que.length){
            let size = que.length;
            for(let i = 0; i < size; i++){
                let node = que.shift();
                if(node.left) {
                    que.push(node.left);
                    parentMap.set(node.left, node);
                }
                if(node.right) {
                    que.push(node.right);
                    parentMap.set(node.right, node);
                }
            }
        }
    }
    parentCheck();

    let visitedNode = new Map();
    let que = [];
    let curr_dist = 0;
    visitedNode.set(target, true)
    que.push(target);

    while(que.length){
        let size = que.length;
        if(curr_dist === k) break;
        else curr_dist++;
        for(let i = 0; i < size; i++){
            let node = que.shift();
            if(node.left && !visitedNode.has(node.left)) {
                que.push(node.left);
                visitedNode.set(node.left, true);
            }
            if(node.right && !visitedNode.has(node.right)) {
                que.push(node.right);
                visitedNode.set(node.right, true);
            }
            if(parentMap.get(node) && !visitedNode.has(parentMap.get(node))) {
                que.push(parentMap.get(node));
                visitedNode.set(parentMap.get(node), true);
            }
        }
    }

    return que.map(node => node.val);
};