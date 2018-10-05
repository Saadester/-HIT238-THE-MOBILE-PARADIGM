document.addEventListener('DOMContentLoaded', function() {

var savedNotes = localStorage.getItem('noteAppStorageObj');

// Does the object retrieved from storage contain any information?
// If so do this
if (savedNotes !== null) {

  savedNotes = JSON.parse(savedNotes);

  savedNotes = Object.keys(savedNotes).map(function (key) { return savedNotes[key]; });

  for(var x = 0; x < savedNotes.length; x++){

    // This takes the contents of the note and wraps it in a .note div for formatting
    var newNote = '<div class="note">' + savedNotes[x] + '</div>';

    // This adds the note to the document
    document.querySelector("body").innerHTML += newNote;
  }
}
// This function creates the add note dialog box
function addNoteScreen() {

  var elString = "";

  // Animate the plus new note button to turn into an X with the twist class
  document.querySelector("#add-note-btn").classList.add("twist");

  elString += '<div id="add-note-screen">';
  elString += '<h1>Add New Note</h1>';
  elString += '<textarea id="new-note-content" autofocus></textarea>';
  elString += '<button id="insert-space">Insert Space</button>';
  elString += '<button id="insert-questionmark">Insert ?</button>';
  elString += '<button id="submit-new-note">Add Note</button>';
  elString += '</div>';
  // Add the element string created above to the document
  document.querySelector("body").innerHTML += elString;

  document.querySelector("#add-note-screen").classList.add("note-screen-in");
  // Adding and removing button
  document.querySelector("#add-note-btn").removeEventListener("click", addNoteScreen);
  document.querySelector("#add-note-btn").addEventListener("click", removeNoteScreen, false);

  // Event listener for Space and ? adding
  document.querySelector("#insert-space").addEventListener("click", function(){
    typeInTextarea(document.querySelector("textarea"), "  ")
  }, false);

  document.querySelector("#insert-questionmark").addEventListener("click", function(){
    typeInTextarea(document.querySelector("textarea"), "?")
  }, false);
