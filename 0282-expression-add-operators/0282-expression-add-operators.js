/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let ans = [];

    function solve(index, sum, path, prev){
        if(index === num.length){
            if(sum === target) ans.push(path);
            return;
        }

        for(let i = index; i < num.length; i++){
            if(i > index && num[index] === '0') break;

            let number = num.slice(index, i+1);
            let digit = Number(number);

            if(index === 0){
                solve(i+1, digit, path + number, digit);
            }else{
                solve(i+1, sum + digit, path + '+' + number, digit);
                solve(i+1, sum - digit, path + '-' + number, -digit);
                solve(i+1, sum - prev + (digit * prev), path + '*' + number, prev * digit);
            }
        }
    }

    solve(0, 0, '', 0);

    return ans;
};