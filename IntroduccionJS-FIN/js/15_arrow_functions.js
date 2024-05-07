/*
Arrow Functions
use => operator
*/

const sum =  (num1 = 0, num2 =0) => {
    console.log(num1+ num2)
}

// If you have Only one instruction, you can remove the curly brackets
//const sum =  (num1 = 0, num2 =0) => console.log(num1+ num2)

sum(10,20)

// Function with return
const sum3 =  (num1 = 0, num2 =0) => {
    return (num1 + num2)
}

const result = sum3(20,20)
console.log(result)