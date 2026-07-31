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
var verticalTraversal = function(root) {
    if(!root) return [];
    let que = [[root, 0, 0]];
    let nodes = new Map();
    while(que.length){
        let [temp, x, y] = que.shift();

        if(!nodes.has(x)) nodes.set(x, new Map());
        if(!nodes.get(x).has(y)) nodes.get(x).set(y, []);
        nodes.get(x).get(y).push(temp.val);

        if(temp.left) que.push([temp.left, x-1, y+1]);
        if(temp.right) que.push([temp.right, x+1, y+1]);
    }

    let ans = [];
    let sortedX = [...nodes.keys()].sort((a,b) => a-b);

    for(const x of sortedX){
        let col = [];
        let sortedY = [...nodes.get(x).keys()].sort((a,b) => a-b);
        for(const y of sortedY){
            col.push(...nodes.get(x).get(y).sort((a,b) => a-b));
        }
        ans.push(col);
    }

    return ans;
};