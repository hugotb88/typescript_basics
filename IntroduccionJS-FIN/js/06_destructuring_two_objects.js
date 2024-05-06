/* 
Destructuring two or more objects 
*/

const product = {
    productName : "PC",
    price : 350,
    isAvailable : true
}

const client = {
    clientName : "Victor",
    premium : true,
    address: {
        street: "Vaticano"
    }
}

const { productName:  nameProduct } = product
const { clientName: nameClient, address: {street} } = client

console.log(nameProduct)
console.log(nameClient)

console.log(street)

