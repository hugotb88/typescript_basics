/*
Performance API and multiple Async Await

JavaScript has its own API to measure the performance of your app
*/
const urlComments = 'https://jsonplaceholder.typicode.com/comments'
const urlTodos = 'https://jsonplaceholder.typicode.com/todos'
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos'


//Using Performance API 
//Multiple sources, common error measuring the performance
const retrieveInfo = async () => {
    try{
        const start = performance.now() //It will start to measure performance

        const responseComments = await fetch(urlComments) 
        const dataComments = await responseComments.json() 
        console.log(dataComments)

        const responseTodos = await fetch(urlTodos) 
        const dataTodos = await responseTodos.json() 
        console.log(dataTodos)

        const responsePhotos = await fetch(urlPhotos) 
        const dataPhotos = await responsePhotos.json() 
        console.log(dataPhotos)

        const end = performance.now() //It will end the measurement
        console.log(`The result is: ${end - start} miliseconds`)
    }catch (error){
        console.log(error) 
    }
}

retrieveInfo()


// Fixing the issue to measure performance from multiple sources 
//Put everything in a single Promise
const fixedRetrieveInfo = async () => {
    try{
        const start = performance.now() //It will start to measure performance

        // It starts the three fetchs at the same time
        const [responseComments, responseTodos, responsePhotos] = await Promise.all( [ fetch(urlComments), fetch(urlTodos), fetch(urlPhotos) ]) 

        // It gets the data from the three responses at the same time
        const [dataComments, dataTodos, dataPhotos] = await Promise.all( [ responseComments.json(), responseTodos.json(), responsePhotos.json() ]) 
        
        console.log(dataComments)
        console.log(dataTodos)
        console.log(dataPhotos)

        const end = performance.now() //It will end the measurement
        console.log(`The REAL result after the fix is: ${end - start} miliseconds`)
    }catch (error){
        console.log(error) 
    }
}

fixedRetrieveInfo()