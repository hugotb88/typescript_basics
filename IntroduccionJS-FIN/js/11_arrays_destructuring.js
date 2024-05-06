/*
Arrays Destructuring
*/
const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const reactTechnology = technologies[3]
console.log(reactTechnology)

//Destructuring
const[html, css, nodejs, reactjs] = technologies //html, css and nodejs are only the positions of the array 0,1,2
console.log(nodejs) //"JavaScript"

//Destructuring option
const[ , , , reactjs2] = technologies //html, css and nodejs are only the positions of the array 0,1,2
console.log(nodejs) //"JavaScript"