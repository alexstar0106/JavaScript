const num = [23, 26, 15, 94, 45, 102, 56, 34, 2, 13]
const result1 = num.filter( el => el % 2 == 0)

console.log(result1);

const result2 = num.map(function (i) {
    if (i < 30) {
        return i * 2
    }
    else {
        return i
    }
})

console.log(result2);