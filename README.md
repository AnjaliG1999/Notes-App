# Notes-App
Node.js projects created during "The Complete Node.js Developer Course (3rd Edition)" by Andrew Mead
This app allows users to perform the below mentioned operations.

## Add a new note
  node app.js add --title="List" --body="Pants"
  node app.js add --title="Grocery" --body="Eggs, Milk, Bread"
  node app.js add --title="Shopping List" --body="Pants"
(This statement creates a new JSON file 'notes.json' when executed for the first time.)

## Remove a note
  node app.js remove --title="List"
  node app.js remove --title="Shopping List"
(This statement removes the note with the given title if it exists.)

## Listing all the notes
  node app.js list
(This statement lists all the note titles present in the JSON file.)

## Reading a note
  node app.js read --title="List"
  node app.js read --title="Grocery List"
(This statement reads the note with the given title from the JSON file.)

--npm libraries like nodemon can also be used to test the results.
