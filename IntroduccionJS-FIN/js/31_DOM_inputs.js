/*
DOM Inputs with JS

Link to Element events Documentation
https://developer.mozilla.org/es/docs/Web/API/Element
*/

const inputName = document.querySelector('#nombre')

inputName.addEventListener('input', (e) => {
    console.log(e.target.value) // Prints in console each character introduced when 'input' happens, each character trigger an 'e'vent
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword) // It calls a function at every input

// Shows the character 300 miliseconds when you type it and then hides it
function functionPassword() {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 300)
}