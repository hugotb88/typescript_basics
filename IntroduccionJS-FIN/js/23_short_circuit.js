/*
Short Circuit
Truthy --> Something considered true in a boolean context
Falsy --> everything else
*/

// Examples Truthy and Falsy
if(50){
    console.log('Truthy')
}else{
    console.log('Falsy')
}


if(new Date()){
    console.log('Truthy')
}else{
    console.log('Falsy')
}

if("false"){
    console.log('Truthy')
}else{
    console.log('Falsy')
}

// Short Circuit example
const user = {}
user && console.log('User exists') //Even if the object is empty, displays that the User exists

// Better implementation
const auth = true
auth && console.log('Authenticated User') //Even if the object is empty, display as Authenticated