/*
How to Join two or more objects (SPREAD operator ...)
*/
const product = {
    productName : "PC",
    price : 350,
    isAvailable : true
}

const client = {
    clientName : "Victor",
    premium : true
}

const shoppingCart = {
    quantity : 1,
    product
}

console.log(shoppingCart)


//Adding content from product to shopping cart
const shoppingCartWithProduct = {
    quantity : 1,
    ...product
}

console.log(shoppingCartWithProduct)

//Object Assign
const shoppingCartWithProductAndClient = Object.assign(product,client)
console.log(shoppingCartWithProductAndClient)