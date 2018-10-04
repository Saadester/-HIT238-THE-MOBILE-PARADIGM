
			// Assigning functions its classes and id's

(function() {
	var  notes, count = 0;
    var _private = {

		 attachNoteEvent:function(noteElement) {
		    var div = noteElement.children("div");
		    var closeImg = div.find("i");

		    div.focus(function () {
		        closeImg.removeClass("hide");
		    });

		    div.children().focus(function () {
		        closeImg.removeClass("hide");
		    });

		    div.hover(function () {
		        closeImg.removeClass("hide");
		    }, function () {
		        closeImg.addClass("hide");
		        _private.saveNotes();
		    });

		    div.children().hover(function () {
		        closeImg.removeClass("hide");
		    }, function () {
		        closeImg.addClass("hide");
		    });
		},

      // Adding the time and date on top of notes ( the time and date note was created )

    addNewNote: function(className, title, content, time) {
  if (!className) {
      className = "c-" + Math.ceil(Math.random() * 3);
      if(!time) {
        var date = new Date();
        var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  (date.getHours() - 4) + ":" + date.getMinutes() + ":" + date.getSeconds();
      }
    }
    //Setting up local storage for save,delete and add notes


      notes.append("<li><div class='" + className + "'><i class='icon-check'>  Save</i><p class='time'>" + time + "</p>" + "<textarea class='note-title' placeholder='Enter a title...' maxlength='50'/>" + "<textarea class='note-content' placeholder='Start a note...'/>" + "<i class='icon-cancel hide'> Delete</i>" + "</div></li>");

      var newNote = notes.find("li:last");
      newNote.find(".icon-cancel").on('click', function(){
          newNote.remove();
          _private.saveNotes();
      });
      newNote.find(".icon-check").on('click', function(){
        _private.saveNotes();
        $("body").fadeIn(175).fadeOut(175).fadeIn(175)
      })

      _private.attachNoteEvent(newNote);

      if (title) {
        newNote.find("textarea.note-title").val(title);
        }

      if (content) {
        newNote.find("textarea.note-content").val(content);
        }
        if (time){
          newNote.find(".time").text();
        }

        _private.saveNotes();
      },
   saveNotes: function() {
      var notesArray = [];

      notes.find("li > div").each(function (i, e) {
          var c = $(e).attr("class");
          var title = $(e).find("textarea.note-title");
          var content = $(e).find("textarea.note-content");
          var time = $(e).find('.time').text();

          notesArray.push({ Index: i, Title: title.val(), Content: content.val(), Class: c, Time: time });
      });
      // If notes more than 0, Function load notes from local storage

      		    var jsonStr = JSON.stringify(notesArray);

      		    localStorage.setItem("notes", jsonStr);
      		},
              loadNotes: function() {
      		    var localNotes = localStorage.getItem("notes");
      		    if ( localNotes ) {
      		        var notesList = JSON.parse(localNotes);
      		  		count = notesList.length;
      		        var i;
      		        for (i = 0; i < count; i++) {
      		            var storedNote = notesList[i];
      		            _private.addNewNote(storedNote.Class, storedNote.Title, storedNote.Content, storedNote.Time);
      		        }
      		        $('#controls strong').hide();
      		        $('#welcome').html('Quick Notes')
      		    }
      		}
          };
      						
