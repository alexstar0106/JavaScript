const person = {
    name: 'John',
    age: 24,
    occupation: 'programmer',
    favoriteMovie: 'Star Wars',
    getSummary() {
        console.log(`${person.name} is a ${person.age}-year old ${person.occupation} and his favorite movie is ${person.favoriteMovie}.`);
    }
}

person.getSummary();
