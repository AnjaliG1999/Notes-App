//importing the necessary files
const fs = require('fs')
const chalk = require('chalk')

//Add a new note
const addNote = (title, body) => {
    const notes = loadNotes()

    //alternative to find the existence of a note title
    //const duplicateNotes = notes.filter((note) => note.title === title)
    //if (duplicateNotes)

    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

//Remove a note
const removeNote = (title) => {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter((note) => note.title !== title)
     
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }   
}

//List all the note titles
const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    
    notes = loadNotes()

    notes.forEach((note) => console.log(note.title));
}

//Read a note with the given title
const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.blue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

//save all the changes to the JSON file
const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//load the content of the JSON file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
       
}

//export all the necessary functions
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}