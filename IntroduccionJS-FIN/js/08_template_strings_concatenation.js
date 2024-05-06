/*
Template Strings and Concatenation
With Back tick character `
*/

const productName = "12 inches Tablet"
const price = 450
const brand = "Lenovo"

// Old way
console.log('Product Name is: ' +  productName )
console.log(productName + ' is $' + price + ' USD, Brand: ' + brand)

// Template String 
console.log(`Product Name is: ${productName}`)
console.log(`${productName} is $${price} USD, Brand: ${brand}`)