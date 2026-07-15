/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    for(let i = 0; i < asteroids.length; i++){
        if(asteroids[i] > 0){
            stack.push(asteroids[i])
        }else{
            while(-asteroids[i] > stack[stack.length-1]){
                if(stack[stack.length-1] < 0){
                    stack.push(asteroids[i])
                    break
                }
                stack.pop()
            }
            if(-asteroids[i] === stack[stack.length-1]) stack.pop()
            else if(stack.length === 0) stack.push(asteroids[i])
            else continue
        }
    }
    return stack
};