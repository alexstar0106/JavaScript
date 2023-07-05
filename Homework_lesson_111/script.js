const aboutCountry = {
    capital: 'Minsk',
    population: 9200617,
    currency: 'BYN',
    continent: 'Europe'
}

let property = prompt('Что вы хотите узнать о стране', 'capital, population, currency, continent');

if ('capital' in aboutCountry) {
    console.log(aboutCountry[property])
} else if ('population' in aboutCountry) {
    console.log(aboutCountry[property])
} else if ('currency' in aboutCountry) {
    console.log(aboutCountry[property])
} else if ('continent' in aboutCountry) {
    console.log(aboutCountry[property])
} else {
    console.log('Такого свойства нет')
}
