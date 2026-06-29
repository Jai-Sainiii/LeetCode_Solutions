/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let t = Date.now();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Date.now() - t)
        }, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */