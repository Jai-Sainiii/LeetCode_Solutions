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
    const ans = [];
    let map = new Map();
    let queue = [[root, 0, 0]];
    let front = 0;
    
    while(front < queue.length){
        let [node, row, col] = queue[front++];

        if(!map.has(col)) map.set(col, new Map());
        if(!map.get(col).has(row)) map.get(col).set(row, []);

        map.get(col)
           .get(row)
           .push(node.val);

        if(node.left) queue.push([node.left, row+1, col-1]);
        if(node.right) queue.push([node.right, row+1, col+1]);
    }

    const columns = [...map.keys()].sort((a,b) => a-b);

    for(const col of columns){
        const colValues = [];

        const rows = [...map.get(col).keys()].sort((a,b) => a-b);

        for(const row of rows){
            const values = map.get(col).get(row);
            values.sort((a,b) => a-b);
            colValues.push(...values);
        }
        ans.push(colValues);
    }

    return ans;
};