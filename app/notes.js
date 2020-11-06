const { notDeepEqual } = require("assert")
const chalk = require("chalk")
const fs = require("fs")


const loadNotes = () => {
   try{ //if the file is not created
   const dataBuffer = fs.readFileSync("notes.json")
   const dataJSON = dataBuffer.toString()
   return JSON.parse(dataJSON)

   }catch(e){
      return []
   }
}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync("notes.json", dataJSON)
}

const addNotes = function (title, body) {
   const notes = loadNotes()

   //check if multiple title are used:
   // const duplicatedNotes = notes.filter( (note) => note.title === title)

   const duplicatedNote = notes.find( (note) => note.title === title)

   // debugger start it in terminal: node inspect app.js 

   if(!duplicatedNote){ //if there are no duplicate code run this one otherwise run the else statement
      notes.push({
         title: title,
         body: body,
      })
      saveNotes(notes)
      console.log(chalk.green.bold.inverse("New note added!"))
   }
   else{
      console.log(chalk.red.bold.inverse("Cannot duplicate a note's title!"))
   }
}

const removeNotes = (title) => {
   const notes = loadNotes()

   //check if there multiple title are uesd:
   const notesToKeep = notes.filter(function (note) {
      return note.title !== title
   })

   if(notes.length !== notesToKeep.length){
      console.log(chalk.green.bold.inverse("Note Removed Successfully!"))
   }
   else{
      console.log(chalk.red.bold.inverse("Note not found!"))
   }

   saveNotes(notesToKeep)
}

const listNotes = () => {
   const notes = loadNotes()
   console.log(chalk.bold.yellow.inverse("Your notes are: "))

   notes.forEach((note) => {
      console.log(note.title)
   })

}

const readNotes = (title) => {
   const notes = loadNotes()

   const note = notes.find( (note) => note.title === title)

   if(note){
      console.log(chalk.blue.bold(note.title + ": " + note.body))
   }else{
      console.log(chalk.red.bold.inverse("There is no notes which such title!"))
   }
}


//exporting 1 thing: to be used in another file
// module.exports = printNotes

//exporting multiple things:
module.exports = {
   addNotes: addNotes,
   removeNotes: removeNotes,
   listNotes: listNotes,
   readNotes: readNotes,
}