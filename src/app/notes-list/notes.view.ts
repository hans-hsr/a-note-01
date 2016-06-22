import * as $ from 'jquery';

import octopus from './notes.viewmodel';

    var view = {

        init: function() {
            // list
            this.noteList = $('#notes');
            // form
            var newNoteForm = $('#new-note-form');
            // form fields
            var newNoteTitle = $('#new-note-title');
            var newNoteContent = $('#new-note-content');
            // submit form
            newNoteForm.submit(function(e){

                octopus.addNewNote(newNoteContent.val(),
                                   newNoteTitle.val());

                // empty fields after submit
                newNoteContent.val('');
                newNoteTitle.val('');
                // stop propagation
                e.preventDefault();
            });

            view.render();
        },

        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.title +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    export default view;
