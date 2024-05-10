/*
? --> Ternary Operator
*/
const authenticated = true
const balance = 1000
const pendingBalance = 1200
const creditCard = true


if(authenticated){
    console.log('The user is authenticated')
}else{
    console.log('User is not authenticated.')
}

// Ternary
authenticated ?
    console.log('The user is authenticated') :
    console.log('User is not authenticated.')

balance > pendingBalance ?
    console.log('You can pay.') :
    console.log('You can not pay.')


// Inner Ternary
balance > pendingBalance ?
    console.log('You can pay.') :
    creditCard ?
        console.log('You can pay with your Credit Card') :
        console.log('You can not pay.')


// Same scenario but with OR
balance > pendingBalance || creditCard?
    console.log('You can pay.') :
    console.log('You can not pay.')
