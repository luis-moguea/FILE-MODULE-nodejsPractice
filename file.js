const fs = require("fs")

//SYNCHRONOUS WAY TO DO IT
//const files = fs.readdirSync("./")

//ASYNCHRONOUS WAY TO DO IT

const files = fs.readdir("./", (err, files) => {
    if(err) {
        console.log("Error", err)
    } else {
        console.log("Result", files)
    }
})

const testFiles = fs.readdir("./", (err, files) => {
    if(err){
        return "Error", err
    } return "Result", files
})

console.log(files, testFiles)