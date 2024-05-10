/*
Instead of having all the functions in a single file
or
Having multiple files declared as <script> in the html



We can use ECMAScript modules
<script src="js/24_ECMAScript_modules.js" type="module"></script>

export --> keyword to export the functions you need 
import {} from 'path_to_file.js' --> keyword that allows import only the functions you need in another js file


export default
There should be only one default export
you can import it outside the curly brackets {}
*/
import multiplication, { addition, substraction as subs } from "./functions.js";

const result = addition(10,20)
console.log(`The resulf of the Addition is: ${result}`)

const result2 = subs(60,20)
console.log(`The resulf of the Substraction is: ${result2}`)

const result3 =  multiplication(25,12)
console.log(`The resulf of the Substraction is: ${result3}`)