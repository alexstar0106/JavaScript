let num = [1, 3, 7, 13, 23];
let sum = 0;
for(let elem of num) {
    sum += elem
}
console.log(sum)


let year = [1978, 1992, 1990, 1988, 1982, 1995, 2000];
let age = [];
for (let i = 0; i < year.length; i++) {
    subt = 2023 - year[i];
    age.push(subt)
}
console.log(age);
