/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revNum = 0
    let check = Math.sign(x)
    if(check < 0) x = -x
    else x = x

    while(x > 0){
        lastDigit = x % 10
        revNum = revNum * 10 + lastDigit
        x = Math.floor( x / 10 )
    }

    if(check < 0) revNum = -revNum

    if(revNum >= -(2 ** 31) && revNum <= (2 ** 31)){
        return revNum
    }else{
        return 0
    }

};