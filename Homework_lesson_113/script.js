const person = {
    name: 'John',
    age: 24,
    occupation: 'programmer',
    favoriteMovie: 'Star Wars',
    getSummary() {
        console.log(`${this.name} is a ${this.age}-year old ${this.occupation} and his favorite movie is ${this.favoriteMovie}.`);
    }
}

const person2 = {
    name: 'Alex',
    age: 30,
    occupation: 'cook',
    favoriteMovie: 'Batman'
}
person2.getSummary = person.getSummary;

const person3 = {
    name: 'Mike',
    age: 20,
    occupation: 'driver',
    favoriteMovie: 'Superman'
}
person3.getSummary = person.getSummary;

person.getSummary();
person2.getSummary();
person3.getSummary();