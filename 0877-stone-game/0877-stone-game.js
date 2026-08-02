/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let memo = new Map();

    function win(left, right){
        if(left === right) return piles[left];

        let key = `${left},${right}`;
        if(memo.has(key)){
            return memo.get(key);
        }

        let leftTake = piles[left] - win(left+1, right);
        let rightTake = piles[right] - win(left, right-1);

        let ans = Math.max(leftTake, rightTake);
        memo.set(key, ans);
        return ans;
    }

    return win(0, piles.length-1) >= 0
};