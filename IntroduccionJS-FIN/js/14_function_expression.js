/*
Function Expression
includes const keyword
you need to declare the funcion before use it
If you create the function without the const, JavaScript will
initialize first all the functions and then use it.
*/

//Function Expression
const sum = function (num1 = 0, num2 =0){
    console.log(num1+ num2)
}

sum(10,20)