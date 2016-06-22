"use strict";
var $ = require('jquery');
var notes_viewmodel_1 = require('./notes.viewmodel');
var view = {
    init: function () {
        // list
        this.noteList = $('#notes');
        // form
        var newNoteForm = $('#new-note-form');
        // form fields
        var newNoteTitle = $('#new-note-title');
        var newNoteContent = $('#new-note-content');
        // submit form
        newNoteForm.submit(function (e) {
            notes_viewmodel_1.default.addNewNote(newNoteContent.val(), newNoteTitle.val());
            // empty fields after submit
            newNoteContent.val('');
            newNoteTitle.val('');
            // stop propagation
            e.preventDefault();
        });
        view.render();
    },
    render: function () {
        var htmlStr = '';
        notes_viewmodel_1.default.getNotes().forEach(function (note) {
            htmlStr += '<li class="note">' +
                note.title +
                '</li>';
        });
        this.noteList.html(htmlStr);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = view;
