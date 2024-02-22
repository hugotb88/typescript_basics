// var allows duplicate variables
var edad = 10
var edad = 20
console.log(edad) 

// let doesn't allow duplicate variables, unless you use let inside of a block of code
let num2 = 10
//let num2 = 20
num2 = 20
console.log(num2) 

// const doesn't allow duplicate variables
const num3 = 20
//num3 = 20
console.log(num3) 

//     IF with var      //
var something = 10
if(true){
    something = 20
    console.log(something)
}
console.log(something)


//     IF with let      //
let someLet = 10
if(true){
    let someLet = 20
    console.log(someLet)
}

console.log(someLet)
