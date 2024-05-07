/*
Functions
*/
function sum(){
    console.log(1 +1)
}

//calling the function
sum()


//function with parameteres
function sumWithParams(num1, num2){
    console.log(num1 + num2)
}

sumWithParams(120,250)


// We can define default values for parameters
function sumWithDefaultParameters(num, num2=34){
    console.log(num + num2)
}

sumWithDefaultParameters(10)