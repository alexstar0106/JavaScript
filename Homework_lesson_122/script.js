const num = [23, 26, 15, 94, 45, 102, 56, 34, 2, 13]
const result1 = num.reduce((curr, i) => curr + i) / num.length
const result2 = num.reduce((curr, i) => Math.min(curr, i))

console.log(result1);
console.log(result2);

num.forEach((i) => 
console.log(i * i))

let result3 = 0;
num.forEach((i) => result3 += i)
console.log(result3);