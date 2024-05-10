/*
&& --> AND operator
|| --> OR operator
*/

const balance = 1000
const pendingBalance = 500
const creditCard = true

if(balance > pendingBalance || creditCard){
    console.log('You can pay')
}else{
    console.log('You can not pay')
}