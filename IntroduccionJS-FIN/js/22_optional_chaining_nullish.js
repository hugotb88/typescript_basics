/*
Optional Chaining
Verify if some properties of an object exist to not stop the execution of the program
? --> operator

Nullish coalescing
Returns the value on the right side if the value on the left is Undefined or null
if not, returns the value on the left
?? --> operator
*/

const student = {
    name: 'Victor',
    course: 'React JS I',
    isCoursePassed: true
}

console.log(student.exams?.exam1) //Without the operator, the execution will stop here, it verifies if exams exist
console.log('Student')


// Nullish Coalescing (??)
const page = 10 ?? 1
console.log(page)

const page1 = null ?? 1
console.log(page1)