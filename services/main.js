
const Note = require('../models/Note');

async function createNote(title, content) {
  const note = new Note({ title, content });
  await note.save();
  return note;
}

async function getAllNotes() {
  return Note.find();
}

async function getNoteById(id) {
  return Note.findById(id);
}

async function updateNote(id, title, content) {
  return Note.findByIdAndUpdate(
    id,
    { title, content, updatedAt: Date.now() },
    { new: true }
  );
}

async function deleteNoteById(id) {
  return Note.findByIdAndDelete(id);
}

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNoteById,
};
