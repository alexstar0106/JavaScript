let sum = 0;
let num = +prompt('Введите число');
while(num >= 0){
    sum += num;
    if (sum >= 100) {
        break
    }
    num = +prompt('Введите число');
}
console.log(sum)

for(let i = 0; i <= 100; i++){
    if(i >= 40 && i <= 50){
        continue
    }
    console.log(i);
}