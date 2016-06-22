"use strict";
var notes_model_1 = require('../notes-details/notes.model');
var notes_view_1 = require('./notes.view');
var octopus = {
    addNewNote: function (contentStr, titleStr) {
        notes_model_1.default.add({
            content: contentStr,
            title: titleStr
        });
        notes_view_1.default.render();
    },
    getNotes: function () {
        return notes_model_1.default.getAllNotes();
    },
    init: function () {
        notes_model_1.default.init();
        notes_view_1.default.init();
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = octopus;
