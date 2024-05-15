/*
DOM Events with JS

Link to Element events Documentation
https://developer.mozilla.org/es/docs/Web/API/Element
*/

const heading = document.querySelector('.heading')
const links2 = document.querySelectorAll('.navegacion a')

//Click
heading.addEventListener('click', () => {
    heading.textContent = 'The heading changes after click'
})

//Mouse Enter (like Hover)
heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Ricky es gay'
})

links2.forEach( link => {
    link.addEventListener('click', (e) => { //'e' is event
        console.log(e)
        e.preventDefault() // removes the default event of the element, like the link trying to go somewhere when you click
        link.textContent = 'It changes'
        

    })
})