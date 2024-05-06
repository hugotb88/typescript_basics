/*
Examples of how to modify an Object
*/

const product = {
    productName : "Tablet",
    price : 200,
    isAvailable : false
}

//Javascript Object methods
//Object.freeze(product) //You can't add a new property or modify any value
//Object.seal(product) // You can't add a new property but you can modify the existing ones

// Re-write a value (even if its a const)
product.isAvailable = true
console.log(product)

// Add a new property to the object
product.image = "jpg"
console.log(product)

// Delete a property
delete product.image
console.log(product)