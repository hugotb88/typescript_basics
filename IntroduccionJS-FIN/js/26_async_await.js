/*
Fetch API with Async and Await (Asynchronous calls)
Async --> Asynchronous calls
Await --> To wait for the response and process the data (equivalent in someway to 'then' statement)

Tool jsonplaceholder.typicode.com is a page to a public fake APIs to learning purposes
 */

//Example without function
const url = 'https://jsonplaceholder.typicode.com/comments'

const retrieveInfo = async () => {
    try{
        const response = await fetch(url) //Will wait for the response, and then will continue with the next line
        if(!response.ok){
            throw new Error('There was an issue fetching the data')    
        }
        const data = await response.json() // Will get the data and it will continue until it gets all the data.
        console.log(data)
    }catch (error){
        console.log(error) //Option 1
        console.log(error.message) //Option 2
    }
}

retrieveInfo()