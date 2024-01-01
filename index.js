const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
// const routes = require('./routes/main')
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ice-009:Armaan%4006@cluster0.ynzphiq.mongodb.net/notes')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));

const notesRoutes = require('./routes/notes');
const userRoutes = require('./routes/user');
app.use('/api', notesRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
