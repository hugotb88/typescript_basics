/*
 Javascript  data types:
 - Undefined
 - String
 - Numbers
 - BigInt
 - Boolean
 - Null
 - Symbol
*/

//Undefined
let client
console.log(client)
console.log(typeof client)

//String 
let clientName = "Hugo"
console.log(clientName)
console.log(typeof clientName)

let product = 'Box' //Simple quotes are also allowed
console.log(product)
console.log(typeof product)

//Numbers
let num1 = 20.20
let num2 = 30
let num3 = -100

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// BigInr
let bigintnum = 272478343948874949784389438948949845686486608684868566850680606086580680
console.log(typeof bigintnum)

// Boolean
let isAutenthicated = true
console.log(isAutenthicated)

// Null
let discount = null
console.log(discount)

// Symbol
// There are not two identical symbols, even if they have the same value
let symbolExample = Symbol(30)
let symbolExample2 = Symbol(30)

console.log(symbolExample)
console.log(symbolExample == symbolExample2)
console.log(symbolExample === symbolExample2)
