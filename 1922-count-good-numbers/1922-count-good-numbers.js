/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n;

    function power(base, expo) {
        base = BigInt(base)
        expo = BigInt(expo)

        let result = 1n;

        while (expo > 0n) {
            if (expo % 2n === 1n) {
                result = (result * base) % MOD;
            }

            base = (base * base) % MOD;
            expo /= 2n;
        }

        return result;
    }

    const even = Math.floor((n + 1) / 2);
    const odd = Math.floor(n / 2);

    return Number((power(5, even) * power(4, odd)) % MOD);
};