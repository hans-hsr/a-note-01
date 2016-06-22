"use strict";
var $ = require('jquery');
var notes_viewmodel_1 = require('./notes.viewmodel');
var view = {
    init: function () {
        this.noteList = $('#notes');
        var newNoteForm = $('#new-note-form');
        var newNoteContent = $('#new-note-content');
        newNoteForm.submit(function (e) {
            notes_viewmodel_1.default.addNewNote(newNoteContent.val());
            newNoteContent.val('');
            e.preventDefault();
        });
        view.render();
    },
    render: function () {
        var htmlStr = '';
        notes_viewmodel_1.default.getNotes().forEach(function (note) {
            htmlStr += '<li class="note">' +
                note.content +
                '</li>';
        });
        this.noteList.html(htmlStr);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = view;
