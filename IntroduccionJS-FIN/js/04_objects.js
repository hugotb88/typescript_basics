/*
Objects in Typescript
An object is properties collection
Structure --> key : value
*/

const product = {
    name : "Bat",
    price : 300,
    isAvailable : true 
}

console.log(product)
console.log(typeof product)

//Getting obect properties
console.log(product.name)

// Destructuring (Get properties from and object with less code
//Old way
const productName = product.name  //Old way to get a property
const productPrice = product.price  //Old way to get a property
const productIsAvailable = product.isAvailable  //Old way to get a property
console.log(productName)
console.log(productPrice)
console.log(productIsAvailable)

//New way
const { name, price, isAvailable } = product
console.log(name)
console.log(price)
console.log(isAvailable)

//Object Lineal Enhancenment
const isAuthenticated = true
const userName = "Vic"

const newObject = {
    authenticated : isAuthenticated,
    userName : userName
}

console.log(newObject)
