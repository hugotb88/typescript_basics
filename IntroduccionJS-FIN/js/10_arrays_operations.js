const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
console.table(technologies)

//Replace a value in the array
technologies[4] = "Next.js"
console.table(technologies)

//Add a new value in the array (push method mutates th array)
technologies.push = "Java"
console.table(technologies)

//A better option
const technologies2 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const technologies3 = [...technologies2, 'Java']
console.log(technologies3)

//Remove an element using functions
const removedTechnologies = technologies3.filter(function(technology) {
    if(technology != 'HTML'){
        return technology
    }
})

console.log(removedTechnologies)
