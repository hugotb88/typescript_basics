/*
Fetch API with Promises

Fetch API to retrieve information from an API
Promises 

Can be used with functions or without functions


Tool jsonplaceholder.typicode.com is a page to a public fake APIs to learning purposes
 */

//Example without function
const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        throw new Error('There was an issue fetching the data')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {  // Its only executed when there are network issues
        console.log(error.message)
    })


//Example with function
const retrieveData = () => {
    fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        throw new Error('There was an issue fetching the data')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {  // Its only executed when there are network issues
        console.log(error.message)
    })
} 

retrieveData()