/*
DOM Eventswith JS
Submit

Link to Element events Documentation
https://developer.mozilla.org/es/docs/Web/API/Element
*/

const form = document.querySelector('#formulario')
form.addEventListener('submit', (e) =>{
    e.preventDefault() //Prevents that the form is submitted and the console doesnt shows the message

    const name = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    if(name === '' || password === ''){
        console.log('All the fields are mandatory')
    }else{
        console.log('Logging in')
    }
    
    
})