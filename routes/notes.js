// routes/noteRoutes.js
const express = require('express');
const noteController = require('../controllers/notes');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/notes', userController.basicAuthMiddleware ,noteController.createNoteController); //working fine

router.get('/notes', userController.basicAuthMiddleware, noteController.getAllNotesController); //working fine

router.get('/notes/:id', userController.basicAuthMiddleware, noteController.getNoteByIdController); //working fine

router.put('/notes/:id', userController.basicAuthMiddleware, noteController.updateNoteController); //working fine

router.delete('/notes/:id', userController.basicAuthMiddleware, noteController.deleteNoteController); //working fine

module.exports = router;
