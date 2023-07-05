const user = new Object()
user.userName = 'Alex';
user.surname = 'Staroverov';
user.age = 35;
user.occupation = 'pogrammer';

const aboutCountry = {
    capital: 'Minsk',
    population:  9200617,
    currency: 'BYN',
    continent: 'Europe'
}

const property = prompt('Что вы хотите узнать о стране','capital, population, currency, continent')

console.log(aboutCountry[property])