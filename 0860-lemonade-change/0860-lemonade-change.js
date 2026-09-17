/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;
    
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5) fives++;
        else if(bills[i] === 10){
            if(fives >= 1) fives--;
            else {
                return false;
            }
            tens++;
        } else{
            if(fives >= 1 && tens >= 1){
                fives--;
                tens--;
            } else if(fives >= 3){
                fives -= 3;
            } else {
                return false;
            } 
        }
    }

    return true;
};