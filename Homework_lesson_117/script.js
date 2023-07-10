const color = ["red", "green", "black", "white", "blue"];
const deleteColor = color.pop();
color.splice(1, 0, deleteColor);
color.unshift("pink");
color.splice(0, 1, "yelllow");
console.log(color)

const food = ['cherry', 'pear', 'apple', 'kiwi', 'grapes'];
const result = food.findIndex(x => x[0] === 'a');
food.splice(result, 1)
console.log(food);