/*
IF Statement 
> greater than
< less than
>= more or equal than
<=  less or equal than
== equal
=== strict equal (it compares first the types of variables)
!== Different than
*/
const isAuthenticated= true

if(isAuthenticated){
    console.log('Welcome')
}else{
    console.log('You dont have access')
}

const available = 4000
const withdraw = 200

if(available !== withdraw){
    console.log('You can withdraw from the ATM')
}else{
    console.log('Insufficient balance')
}