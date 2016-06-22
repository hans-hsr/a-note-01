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

export default model;