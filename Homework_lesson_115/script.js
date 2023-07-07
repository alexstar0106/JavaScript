const country = ['Belgium', 'Cuba', 'Latvia', 'Peru', 'Portugal', 'Sweden'];

console.log(country[0]);
console.log(country[5]);

country[1] = 'Thailand';
country.length = 8;
country[6] = 'Germany';
country[7] = 'England';
country[8] = 'France';
country.unshift('Slovakia');
console.log(country);