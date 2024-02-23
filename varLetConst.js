// var allows duplicate variables
var edad = 10
var edad = 20
console.log("Example var edad: " + edad ) 

// let doesn't allow duplicate variables, unless you use let inside of a block of code
let num2 = 10
//let num2 = 20
num2 = 20
console.log("Example let num2:" + num2 ) 

// const doesn't allow duplicate variables
const num3 = 20
//num3 = 20
console.log("Example const num3:" + num3) 

//     IF with var      //
var something = 10
if(true){
    something = 20
    console.log("Example var scope,  something:" + something)
}
console.log("something value, scope out of if:" + something)


//     IF with let      //
let someLet = 10
if(true){
    let someLet = 20
    console.log("Example let scope, someLet:" + someLet)
}

console.log("Example let scope out of IF, someLet:" + someLet)


//     const      //
const another = 15
//another = 25 
console.log("Example const, another: " + another)