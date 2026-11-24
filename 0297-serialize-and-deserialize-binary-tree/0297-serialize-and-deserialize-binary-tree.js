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

    for(let front = 1; front < values.length; front++){
        let node = que.shift();
        if(values[front] !== "#"){
            let left = new TreeNode(Number(values[front]));
            node.left = left;
            que.push(left);
        }
        if(values[++front] !== "#"){
            let right = new TreeNode(Number(values[front]));
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