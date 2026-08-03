/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let left = a.length-1
    let right = b.length-1
    let st = []
    while(left >= 0 && right >= 0){
        if(a[left] === '1' && b[right] === '1'){
            if(carry === 1){
                st.push(1)
            }else{
                st.push(0)
                carry = 1
            }
        }else if(a[left] === '1' || b[right] === '1'){
            if(carry === 1){
                st.push(0)
            }else{
                st.push(1)
            }
        }else{
            if(carry === 1){
                st.push(1)
                carry = 0
            }else{
                st.push(0)
            }
        }
        left--
        right--
    }

    while(left >= 0){
        if(a[left] === '1'){
            if(carry === 1){
                st.push(0)
            }else{
                st.push(1)
            }
        }else{
            if(carry === 1){
                st.push(1)
                carry = 0
            }else{
                st.push(0)
            }
        }
        left--
    }
    while(right >= 0){
        if(b[right] === '1'){
            if(carry === 1){
                st.push(0)
            }else{
                st.push(1)
            }
        }else{
            if(carry === 1){
                st.push(1)
                carry = 0
            }else{
                st.push(0)
            }
        }
        right--
    }

    if(carry === 1){
        st.push(1)
    }

    return st.reverse().join("")
};