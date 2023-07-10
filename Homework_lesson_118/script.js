const food = ['cherry', 'melon', 'pear', 'apple', 'kiwi', 'raspberry', 'grapes']
const foodSlice = food.slice(0, 3);
console.log(foodSlice);

const newFood = ['lemon', 'orange', 'banana']
console.log(food.concat(newFood));

const num = [3, 10, 5, 8, 14, 20, 18, 6]
const result = num.indexOf(14);
const newNum = num.slice(result, 8);
num.splice(8, 0, newNum);
console.log(num);