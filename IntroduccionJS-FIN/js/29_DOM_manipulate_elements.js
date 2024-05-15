/*
JavaScript Intermediate

Manipulate DOM Elements (HTML) with JS
*/

// Use selector to get Elements
const heading = document.querySelector('.heading')
const links2 = document.querySelectorAll('.navegacion a')

heading.textContent = 'A New Heading Text, bitches'
//heading.id = 'New ID'

//Remove Attribute
//heading.removeAttribute('class')

const inputName = document.querySelector('#nombre') // Get element using id 'nombre'
inputName.value = 'This is the new fucking default value'


//How to manipulate a collection of elements like the links
//links2[0].textContent = 'A new Link'

//or make it using loops
links2.forEach( link => link.textContent = 'Same link for All')