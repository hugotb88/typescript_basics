/*
Normal compare operator == Only compares values
Strict compare operator === Also compares type
*/

const number = 20
const number2 = 20
const number3 = '20'

// == operator
if(number == number2){
    console.log(`${number} is the same than ${number2}`)
}else{
    console.log(`${number} is not the same than ${number2}`)
}

if(number == number3){
    console.log(`${number} is the same than ${number3}`)
}else{
    console.log(`${number} is not the same than ${number3}`)
}

// === operator
if(number === number2){
    console.log(`${number} is the same than ${number2}`)
}else{
    console.log(`${number} is not the same than ${number2}`)
}

if(number === number3){
    console.log(`${number} is the same than ${number3}`)
}else{
    console.log(`${number} is not the same than ${number3}`)
}