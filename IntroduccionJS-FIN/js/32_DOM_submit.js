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

    //Prevent new Alerts
    const activeAlert = document.querySelector('.alert')
    activeAlert?.remove()

    //Validation rendering messages in HTML
    const alert = document.createElement('DIV') //In Uppercase because JS read HTML in that way... h1 --> 'H1'
    alert.textContent = 'Alert Content'
    alert.classList.add('alert', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black') //Adding CSS
    
    if(name === '' || password === ''){
        alert.textContent = 'All the fields are mandatory'
        alert.classList.add('bg-red-500')
    }else{
        alert.textContent ='Logging in'
        alert.classList.add('bg-green-500')
    }
    
    console.log(alert)

    //Add it to form
    form.appendChild(alert)

    setTimeout(() => {
        alert.remove()  
    },2000)
})