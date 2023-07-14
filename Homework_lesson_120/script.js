const country = ['Belgium', 'Cuba', 'Latvia', 'Peru', 'Portugal', 'Sweden'];
console.log(country.includes('Portugal'));
console.log(country.includes('Argentina'));
console.log(country.includes('Egypt'));
console.log(country.includes('Sweden'));
country.push('Argentina', 'Egypt');
console.log(country);

const num = [23, 0, -15, 97, 45, 102, 56, 34, 2];
const result = num.every(x => x > 0 && x <= 100);
const result2 = num.find(x => x <= 0 || x > 100);

if (result) {
    console.log('Всё верно');
} else {
    console.log(`${result2}  данный элемент не соответствует условию`);
}