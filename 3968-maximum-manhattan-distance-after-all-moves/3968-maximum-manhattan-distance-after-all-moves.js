/**
 * @param {string} moves
 * @return {number}
 */
var maxDistance = function(moves) {
    let leftRight = 0
    let upDown = 0
    let count = 0
    for(let i = 0; i < moves.length; i++){
        if(moves[i] === "U"){
            upDown++
        }else if(moves[i] === "D"){
            upDown--
        }else if(moves[i] === "R"){
            leftRight++
        }else if(moves[i] === "L"){
            leftRight--
        }else if(moves[i] === "_"){
            count++
        }
    }
    // while(count > 0){
    //     if(leftRight < 0){ leftRight--; count--; continue}
    //     else if(upDown < 0){ upDown--; count--; continue }
    //     else if(leftRight >= 0){ leftRight++; count--; continue}
    //     else if(upDown >= 0){ upDown++; count--; continue}
    //     else {upDown++; count--; continue}
    // }

    // if(leftRight < 0) leftRight = -leftRight
    // if(upDown < 0) upDown = -upDown
    // return leftRight + upDown

    return Math.abs(leftRight) + Math.abs(upDown) + count
};