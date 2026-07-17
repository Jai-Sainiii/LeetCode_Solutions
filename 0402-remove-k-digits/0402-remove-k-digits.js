/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let st = []
    for(const n of num){
        while(st.length && k > 0 && st[st.length-1] > n){
            st.pop()
            k--
        }

        st.push(n)
    }

    while(st.length && k > 0){
        st.pop()
        k--
    }

    let res = ""
    for(const num of st){
        if(num == 0 && res.length === 0) continue
        res += num
    }

    return res.length === 0 ? "0" : res
};