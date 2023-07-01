function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


let name = 'Mike'
function showMessage() {
    let name = 'Adam'
    console.log('Hello, ' + name);
}

showMessage()    // Hello, Adam    т.к. функция ищет в первую очередь значение переменной внутри себя 



function film(movie){
    if (typeof movie === 'string') {
        console.log('My favourite film is ' + movie);
    } else {
        console.log('I dont have favourite film');
    }
}

film('Batman')