function numFactors(num) {
    let length = 0, arr = [];

    function generateDivisors(curIndex, curDivisor, arr) {
        if (curIndex == arr.length) {
            length++;
            return;
        }
        for (let i = 0n; i <= arr[curIndex][0]; i++) {
            generateDivisors(curIndex + 1, curDivisor, arr);
            curDivisor *= arr[curIndex][1];
        }
    }

    for (let i = 2n; i * i <= num; i++) {
        if (num % i == 0) {
            let count = 0;
            while (num % i == 0) {
                num /= i;
                count += 1;
            }
            arr.push([count, i]);
        }
    }
    if (num > 1) arr.push([1, num]);
    let curIndex = 0, curDivisor = 1n;

    generateDivisors(curIndex, curDivisor, arr);
    return BigInt(length);
};
function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }
    if (value == 4n) {
        return 2n
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}
// let a = numFactors(10n ** (sqrt(num) - 1n))

sqrt(BigInt(9))
console.log("D")
let num = 4n
let a = numFactors(10n ** (sqrt(3n ** ((3n ** (num - 1n)) - 1n)) - 1n))
// let a = numFactors(10n ** (sqrt(3n ** (num - 1n)) - 1n))
// let a = numFactors(3n ** num) - 1n
// let a = numFactors(3n ** (3n ** (10n ** (sqrt(num) - 1n))) - 1n) - 1n
// console.log(sqrt((3n ** num)))
// let a = numFactors((10n ** (sqrt((3n ** num) - 1n) - 1n)))
console.log(a)
let b = numFactors(a)
console.log(numFactors(3n ** num) - 1n)
console.log(b)
let c = numFactors(b)
console.log(c)
throw "STOP"