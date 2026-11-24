/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return "";

    let str = [];
    let que = [root];
    let front = 0;

    while(front < que.length){
        let node = que[front++];

        if(!node){
            str.push("#");
            continue;
        }

        str.push(node.val);
        que.push(node.left);
        que.push(node.right);
    }

    return str.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "") return null;

    let values = data.split(",");
    let que = [];
    let root = new TreeNode(Number(values[0]));
    que.push(root);
    let front = 0;

    for(let i = 1; i < values.length; i++){
        let node = que[front++];
        if(values[i] !== "#"){
            let left = new TreeNode(Number(values[i]));
            node.left = left;
            que.push(left);
        }
        if(values[++i] !== "#"){
            let right = new TreeNode(Number(values[i]));
            node.right = right;
            que.push(right);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */