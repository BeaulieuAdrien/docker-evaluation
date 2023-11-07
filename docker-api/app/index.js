const express = require('express');

const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use([
    helmet(),
    cors(),
]);

// Default route
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Load controllers
app.use('/vehicules', require('@@app/controllers/vehicule.controller'));

// Export app
module.exports = app;

