/*
Intermediate JavaScript

Selectors
Selects Elements 

querySelector can return up to 1 element
querySelectorAll returns all the elements
*/

const heading = document.querySelector('.heading')

//Once you have the element, you have access to its attributes
//console.log(heading)
//console.log(heading.tagName)
//console.log(heading.textContent)
//console.log(heading.id)


//querySelector
const links1 = document.querySelector('.navegacion a') //Add 'a' to select the links
console.log(links1)

//querySelectorAlll
const links2 = document.querySelectorAll('.navegacion a') //Add 'a' to select the links
console.log(links2)