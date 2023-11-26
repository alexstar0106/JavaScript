function add(){
    for (let i = 0; i < arguments.length; i++){
        console.log(i)
    }
}
add(1, 3, 5, 7, 9)

function addTwo(...params){
    console.log(params.map(x => x));
}
addTwo(2, 4, 6, 8, 10)