const noteService = require('../services/main');

const createNoteController = async (req, res) => {
    try {
    //   console.log(req.body);
      const { title, content } = req.body;
      const note = await noteService.createNote(title, content);
      res.json(note);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
const getAllNotesController = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getNoteByIdController= async (req, res) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateNoteController = async (req, res) => {
    try {
      const { title, content } = req.body;
      const note = await noteService.updateNote(req.params.id, title, content);
      if (!note) return res.status(404).json({ error: 'Note not found' });
      res.json(note);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const deleteNoteController= async (req, res) => {
  try {
    const note = await noteService.deleteNoteById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteController,
  deleteNoteController,
};
