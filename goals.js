
let tableArr2 = [
    [
        [1,2,1,1,2,1,1,2,1,1,2],
        [1,3,2,1,2,2,2,2,1,3,2],
        [1,6,3,3,6,2,3,2,1,1,6],
        [1,4,2,3,2,3,2,2,1,4,2],
        [1,4,4,2,2,1,4,4,2,1,2],
        [1,7,3,3,6,2,6,2,1,3,6],
        [1,6,6,3,6,2,1,2,3,6,6],
        [1,5,4,3,4,4,2,3,2,5,4],
        [1,18,4,9,18,3,9,6,3,3,18],
        [1,5,4,2,2,3,4,4,2,3,2],
        [1,10,5,5,10,10,10,10,5,2,2]
    ],
    [ // K = 7
        [1,3,6,3,6,2,1,1,3,6,3],
        [1,3,6,3,6,2,1,1,3,6,3],
        [1,6,6,3,6,2,1,2,3,6,6],
        [1,4,6,3,6,3,2,1,3,7,6],
        [1,12,12,6,6,2,4,4,6,6,3],
        [1,6,6,3,6,2,1,2,3,6,6],
        [1,21,42,21,42,14,2,7,21,42,21],
        [1,5,6,4,6,4,2,1,3,8,6],
        [1,6,7,3,6,3,3,2,3,6,6],
        [1,12,12,6,6,2,4,4,6,6,3],
        [1,30,30,15,30,10,10,10,15,6,3]
    ],
    [ // K = 8
        [1,3,2,2,2,3,2,1,1,3,2],
        [1,4,4,2,4,4,2,2,2,4,4],
        [1,4,2,3,2,3,2,2,1,4,2],
        [1,5,8,3,8,5,4,2,4,5,8],
        [1,6,4,3,2,4,4,4,2,3,2],
        [1,5,4,3,4,4,2,3,2,5,4],
        [1,5,6,4,6,4,2,1,3,8,6],
        [1,6,16,3,16,6,8,2,8,6,16],
        [1,8,3,4,6,3,6,2,1,4,6],
        [1,7,4,3,4,5,4,5,2,4,4],
        [1,12,10,6,10,12,10,10,5,4,2]
    ],
    [ // K = 9
        [1,6,2,3,6,2,3,2,1,1,6],
        [1,6,3,3,6,2,3,2,1,1,6],
        [1,18,3,9,18,3,9,6,2,3,18],
        [1,7,3,3,6,2,6,2,1,3,6],
        [1,12,5,6,6,3,12,4,2,1,6],
        [1,18,4,9,18,3,9,6,3,3,18],
        [1,6,7,3,6,3,3,2,3,6,6],
        [1,8,3,4,6,3,6,2,1,4,6],
        [1,54,4,27,54,4,27,18,2,9,54],
        [1,12,5,6,6,3,12,4,2,1,6],
        [1,30,6,15,30,11,30,10,5,2,6]
    ],
    [ // K = 10
        [1,4,4,2,1,1,4,4,2,1,1],
        [1,5,4,2,1,3,4,4,2,2,2],
        [1,4,4,2,2,1,4,4,2,1,2],
        [1,6,4,3,2,4,4,4,2,3,2],
        [1,20,20,10,3,5,4,20,10,2,5],
        [1,5,4,2,2,3,4,4,2,3,2],
        [1,12,12,6,6,2,4,4,6,6,3],
        [1,7,4,3,4,5,4,5,2,4,4],
        [1,12,5,6,6,3,12,4,2,1,6],
        [1,21,20,10,3,6,4,20,10,2,10],
        [1,20,20,10,5,10,20,20,10,2,1]
    ],
    [ // K = 11
        [1,10,5,5,5,10,10,10,5,2,1],
        [1,10,5,5,5,10,10,10,5,2,1],
        [1,10,5,5,10,10,10,10,5,2,2],
        [1,11,10,5,5,11,10,10,5,3,2],
        [1,20,20,10,5,10,20,20,10,2,1],
        [1,10,5,5,10,10,10,10,5,2,2],
        [1,30,30,15,30,10,10,10,15,6,3],
        [1,12,10,6,10,12,10,10,5,4,2],
        [1,30,6,15,30,11,30,10,5,2,6],
        [1,20,20,10,5,10,20,20,10,2,1],
        [1,110,5,55,55,110,110,110,5,22,2]
    ]
]

let count = 0, hit = 0, noHit = 0
let wholeArr = []
let swArr = []
for (let base = 4; base <= 9; base++) {
    let valuesArr = []

    for (let exponent = 10; exponent <= 117; exponent++) {
    // for (let exponent = 10; exponent <= 10; exponent++) {
        let baseArr = []
        for (let divisor = 5; divisor <= 9; divisor++) {
            for (let k = 6; k <= 11; k++) {
                if (k !== 7 && k !== 11) {
                    continue;
                }
                baseArr.push(cycle(base, exponent, divisor, k))
            }
        }
        valuesArr.push(baseArr)
    }
}
// for (let base = 3; base <= 9; base++) {
//     let valuesArr = []

//     for (let exponent = 10; exponent <= 143; exponent += 10) {
//     // for (let exponent = 10; exponent <= 10; exponent++) {
//         let baseArr = []
//         for (let divisor = 5; divisor <= 9; divisor++) {
//             for (let k = 6; k <= 11; k++) {
//                 if (k !== 7 && k !== 11) {
//                     continue;
//                 }
//                 baseArr.push(cycle(base, exponent, divisor, k))
//             }
//         }
//         valuesArr.push(baseArr)
//     }
// }

console.log(count)
console.log(wholeArr)
console.log(swArr)
console.log(hit)
console.log(noHit)

function cycle(base, exponent, divisor, k, log) {
    // console.log(`${base}^${exponent}/${divisor}, k=${k}`)
    let string = `${base}^${exponent}/${divisor}, k=${k}`
    
    let mod = k * divisor
    // SQUARING

    // EXPAND EXPONENT
                
    let maxExponent = 0, binaryArr = []
    while (2 ** (maxExponent + 1) <= exponent) maxExponent++
    for (let i = maxExponent, currVal = exponent; i >= 0; i--) {
        if (exponent === 0) {
            break;
        }
        if (currVal - 2 ** i >= 0) {
            currVal -= 2 ** i
            binaryArr.push((2 ** i).toString())
        }
    };

    // CYCLING
    let squareValues = new Map([[undefined, 1]]);
    for (let i = 0, currVal = base; i < maxExponent + 1; i++) {
        if (i) {
            currVal **= 2
            currVal %= mod
        } else {
            currVal %= mod
        }
        squareValues.set((2 ** i).toString(), currVal)
    }

    // MULTIPLYING

    let squareAnswer
    if (binaryArr.length > 1) {
        let product;
        for (let x of binaryArr) {
            if (product !== undefined) {
                product *= squareValues.get(x)
            } else {
                product = squareValues.get(x)
            };
        };

        squareAnswer = product % mod
    } else {
        squareAnswer = squareValues.get(binaryArr[0])
    }
    // squareAnswer + '/' + divisor
    
    // console.log(squareAnswer)
    // throw 'STOP'
    let tableBase = base - 1
    let tableDivisor = divisor - 1
    let tableK = k - 6
    let value = tableArr2[tableK][tableDivisor][tableBase]
    // console.log(value)
    if (value >= 10) {
        count++
        if (squareAnswer === 1) {
            hit++
            // console.log(string + ' ' + squareAnswer + '/' + divisor + ' HIT')

        } else {
            noHit++
            // console.log(string + ' ' + squareAnswer + '/' + divisor + ' NOHIT')
        }
        if (squareAnswer % divisor == 0) {
            wholeArr.push([string, squareAnswer + '/' + divisor])
        }
        if (squareAnswer == 1) {
            swArr.push([string, squareAnswer + '/' + divisor])
        }
    }
    // throw "STOP"

};