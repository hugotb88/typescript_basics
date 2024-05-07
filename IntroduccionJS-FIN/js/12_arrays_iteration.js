/*
Arrays Iteration
*/
const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

// for loop iteration
for(let i=0; i<5; i++){
    console.log(technologies[i])
}

//Another way
for(let i=0; i < technologies.length; i++){
    console.log(technologies[i])
}

//for each loop
const arrayForEach = technologies.forEach(technology => {
    console.log(technology )
});

const arrayForEach2 = technologies.forEach(function(technology) {
    console.log(technology )
});

//map, creates a new array
const arrayMap = technologies.map(technology => {
    console.log(technology)
})

// for ... of
for(let technology of technologies){
    console.log(technology)
}

console.log(arrayForEach)
console.log(arrayMap)