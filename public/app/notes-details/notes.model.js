"use strict";
var model = {
    init: function () {
        if (!localStorage.notes) {
            localStorage.notes = JSON.stringify([]);
        }
    },
    add: function (obj) {
        var data = JSON.parse(localStorage.notes);
        data.push(obj);
        localStorage.notes = JSON.stringify(data);
    },
    getAllNotes: function () {
        return JSON.parse(localStorage.notes);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = model;
