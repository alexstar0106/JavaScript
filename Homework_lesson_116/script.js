const food = ['cherry', 'melon', 'pear', 'apple', 'kiwi', 'raspberry', 'grapes'];

const result = food.indexOf('apple');
console.log(result)

const result2 = food.find(x => x[0] === "r");
console.log(result2)

const number = [2, 34, 18, 93, 15, 8]

const result3 = number.find(y => y % 3 === 0);
console.log(result3)

const result4 = number.find(z => 10 < z && z < 17);
console.log(result4)