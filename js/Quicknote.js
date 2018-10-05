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
