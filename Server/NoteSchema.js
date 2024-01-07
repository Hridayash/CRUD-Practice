const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    note:String
})

const NoteModel= mongoose.model('NewNotesModel', NoteSchema);

module.exports= NoteModel;