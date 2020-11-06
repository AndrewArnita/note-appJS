const chalk = require("chalk")
const notes = require("./notes.js")
const yargs = require("yargs")
const { demandOption } = require("yargs")

// without yargs: //

// const command = process.argv[2]
// console.log(process.argv)
// if(command === "add"){
//     console.log("Adding a note.")
// }
// else if (command === "remove"){
//     console.log("Remove a note.")
// }


// with yargs: //


// Change version of yargs:
yargs.version("1.2.0")

// Create add command:
yargs.command({
    command : "add", 
    describe: "Add a new note!",
    builder: {
        title:{ //added like this --title in terminal
            describe: "Title of Notes",
            demandOption: true, //required field
            type: "string" //always have a string value not anything else
        },

        body: { //added like this --body in terminal
            describe: "Adding components to my list",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) =>{
        notes.addNotes(argv.title, argv.body)
    }
    
})

// Create remove command:
yargs.command({
    command : "remove", 
    describe: "Remove a note!",
    builder:{
        title:{
            describe: "Take the title",
            demandOption: true,
            type: "string"
        },
    },
    handler: (argv) =>{
        notes.removeNotes(argv.title)
    }
})

// Create list command:
yargs.command({
    command : "list", 
    describe: "List all notes!",
    handler: () => {
       notes.listNotes()
    }
    
})

// Create read command:
yargs.command({
    command : "read", 
    describe: "Read a note!",
    builder:{
        title:{
            describe: "Read a specific title",
            type: "string"
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
    
})

yargs.parse()
