
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
