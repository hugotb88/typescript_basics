//     With const      //
const arrayNumbers = [10,20,30]
console.log("initial array:" + arrayNumbers)
arrayNumbers.push(40)
console.log("We can add a extra element even if the array is a const:" + arrayNumbers)

//     With var      //
var arrayNumbersVar = [1,2,3]
console.log("initial array:" + arrayNumbersVar)
var arrayNumbersVar = [1,2,3,4]
console.log("var allows to declare twice the array:" + arrayNumbersVar)


//     With let      //
let arrayNumbersLet = [4,5,6]
console.log("initial array:" + arrayNumbersLet)
arrayNumbersLet = [4,5,6,7]
arrayNumbersLet.push(8)
console.log("let after re initialize the array and push an element:" + arrayNumbersLet)