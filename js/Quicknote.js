document.addEventListener('DOMContentLoaded', function() {

var savedNotes = localStorage.getItem('noteAppStorageObj');

// Does the object retrieved from storage contain any information? then apply the if statement.
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
  // Assigning Button (Html for new notes sections)
  elString += '<div id="add-note-screen">';
  elString += '<h1>Add New Note</h1>';
  elString += '<textarea id="new-note-content" autofocus></textarea>';
  elString += '<button id="insert-gymtraining">Gym Exercises</button>';
  elString += '<button id="insert-glossarylist">Glossary List</button>';
  elString += '<button id="submit-new-note">Add Note</button>';
  elString += '</div>';

  // Add the element string created above to the document
  document.querySelector("body").innerHTML += elString;

  document.querySelector("#add-note-screen").classList.add("note-screen-in");
  // Adding and removing button

  document.querySelector("#add-note-btn").removeEventListener("click", addNoteScreen);
  document.querySelector("#add-note-btn").addEventListener("click", removeNoteScreen, false);

  // Event listener for Space and ? adding
  document.querySelector("#insert-gymtraining").addEventListener("click", function(){
    typeInTextarea(document.querySelector("textarea"), "Gym Exercises : ")
  }, false);

  document.querySelector("#insert-glossarylist").addEventListener("click", function(){
    typeInTextarea(document.querySelector("textarea"), "Glossary list : ")
  }, false);

  // Eventlistner for Submit new note button and remove buttons
  document.querySelector("#submit-new-note").addEventListener("click", addNoteToList, false);
}

// function to remove the create note screen
function removeNoteScreen() {

  // Turns the X back into a plus by removing the twist class
  document.querySelector("#add-note-btn").classList.remove("twist");

  // Add class with animation to add-note-screen so animates out
  document.querySelector("#add-note-screen").classList.add("note-screen-out");

  // Wait half a second to remove the add-note-screen so animation can play
  setTimeout(function(){

  // removes the add-note-screen from the document
  document.querySelector("body").removeChild(document.querySelector("#add-note-screen"));
  }, 500);

  // This switches and event listener attached to the add-note-btn to create the note dialog instead of closing it
  document.querySelector("#add-note-btn").removeEventListener("click", removeNoteScreen);
  document.querySelector("#add-note-btn").addEventListener("click", addNoteScreen, false);

  delNoteBtns();
}

//This function is triggered by clicking the add-note-btn in the create note window
function addNoteToList() {

  var noteText = document.querySelector("#new-note-content").value;

  if(noteText === "" || noteText === " "){
      return false;
  }

  // Inserting new contrainer div for the note
  var container = document.createElement('div');
  container.className = "note fade-in";

  var closeBtn = document.createElement('button');
  closeBtn.textContent = "X";
  closeBtn.className = "del-note";
  container.textContent = noteText;
  container.appendChild(closeBtn);
  document.querySelector("body").appendChild(container);
  removeNoteScreen();
  saveNoteTxt();
}

// Function for saving note in local storage (browser)
function saveNoteTxt(){

  var notes = document.querySelectorAll(".note");

  var noteObj = {};

  for(var x = 0; x < notes.length; x++) {
    noteObj[x] = notes[x].innerHTML;
  }

  localStorage.setItem('noteAppStorageObj', JSON.stringify(noteObj));
}

// Function for deleteing note from local storage ( if user clicks on X button)
function delNoteBtns(){

  var els = document.querySelectorAll(".note");
  for(var x = 0; x < els.length; x++){
    els[x].addEventListener("click", function(e){
      if(e.target.className === "del-note"){
        this.parentElement.removeChild(this);
        saveNoteTxt();
      }
    }, false);
  }
}
// function to insert text into a textarea
function typeInTextarea(el, newText) {

  var start = el.selectionStart;
  var end = el.selectionEnd;
  var text = el.value;
  // Gets the contents of the textarea before and after the position of the selection/cursor and stores it
  var before = text.substring(0, start);
  var after  = text.substring(end, text.length);
  // Combines the old text with the added content
  el.value = (before + newText + after);
  el.selectionStart = el.selectionEnd = start + newText.length;
  // Focus cursor on textarea again
  el.focus();
}
// addNoteScreen function which builds the add new note screen into the window
document.querySelector("#add-note-btn").addEventListener("click", addNoteScreen, false);
delNoteBtns();
});
