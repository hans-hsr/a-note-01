import model from '../notes-details/notes.model';
import view from './notes.view';


    var octopus = {
        addNewNote: function(contentStr,titleStr) {
            model.add({
                content: contentStr,
                title: titleStr
            });
            
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    export default octopus;