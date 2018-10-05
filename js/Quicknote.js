document.addEventListener('DOMContentLoaded', function() {

var savedNotes = localStorage.getItem('noteAppStorageObj');

// Does the object retrieved from storage contain any information?
// If so do this

if (savedNotes !== null) {
  savedNotes = JSON.parse(savedNotes);
  savedNotes = Object.keys(savedNotes).map(function (key) { return savedNotes[key]; });
  
