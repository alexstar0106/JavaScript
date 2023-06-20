let flower = "rose";

if (flower === "rose") {
    console.log("Roses are red")
} else if (flower === "violet") {
    console.log("Violets are blue")
} else if (flower === "sunflower") {
    console.log("Sunflowers are yellow")
} else {
    console.log("Please select another flower")
}


const userNumber = +prompt ('Введите число от 1 до 10');

switch (userNumber) {
    case 3 :
    case 8 :
        console.log ('You won!');
    break;
    default :
        console.log ('You lose!')   
}