
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
		
