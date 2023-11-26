const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    color: 'black'
}

for(let key in car){
    console.log(car[key]);
}

const car2 = Object.create(car);
car2.number = 3463;
car2.isАvailable = true;

for(let i in car2){
    if(car2.hasOwnProperty(i)){
        console.log(car2[i]);
    }
}