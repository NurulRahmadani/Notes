const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', notesRoutes);

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
