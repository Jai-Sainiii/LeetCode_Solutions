/**
 * @param {string} moves
 * @return {number}
 */
var maxDistance = function(moves) {
    let leftRight = 0
    let upDown = 0
    let count = 0
    for(const move of moves){
        if(move === "U"){
            upDown++
        }else if(move === "D"){
            upDown--
        }else if(move === "R"){
            leftRight++
        }else if(move === "L"){
            leftRight--
        }else if(move === "_"){
            count++
        }
    }
    return Math.abs(leftRight) + Math.abs(upDown) + count
};