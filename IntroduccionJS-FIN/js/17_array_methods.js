/*
Array Methods
*/
const technologies = ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js']
const numbers = [10, 20, 30]

// Filter 
const newArray = technologies.filter((technology) => 
    technology !== 'HTML'
)
console.log(newArray)

const newNumbers = numbers.filter((number) => number !== 10)
console.log(newNumbers)

// Includes
const newTechnologies = technologies.includes('CSS')
console.log(newTechnologies)

// Some -  return true if at least one meet the condition
const newNumbers2 = numbers.some((number) => number > 15)
console.log(newNumbers2)

// Find - returns first element that matches the condition
const newNumbers3 = numbers.find((number) => number > 15)
console.log(newNumbers3)

// Every - Return true if all the elements matches the condition
const newNumbers4 = numbers.every((number) => number > 15)
console.log(newNumbers4)

// Reduce - Returns the sum of total
const newNumbers5 = numbers.reduce( (total, number) => {
    console.log(total)
    console.log(number)

    return total + number
}, 0) //Initial number
console.log(newNumbers5)
