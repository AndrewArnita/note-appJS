const fs = require("fs");
const { parse } = require("path");

//write to a JSON file

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

//Reading a printing the data of 1-json.json file//

// const dataBuffer = fs.readFileSync("1-json.json") //getting our data from my json file
// const dataJSON = dataBuffer.toString() //converting it to string to be readable instead of Bytes values
// const data = JSON.parse(dataJSON) //pares that JSON data into an object
// console.log(data.title)

//Reading a printing the data of 1-json 2.json file//
const readData = fs.readFileSync("1-json2.json")
const stringData = readData.toString()
const data = JSON.parse(stringData)
data.planet = "Mars"
data.age = "35"
console.log(data)

//updating the new values to the json file:
const userJSON = JSON.stringify(data)
fs.writeFileSync("1-json2.json", userJSON)


//Important//

// // Changing js to JSON
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // Changing JSON to js
// const bookJS = JSON.parse(bookJSON)
// console.log(bookJS.title)
// console.log(bookJS.author)