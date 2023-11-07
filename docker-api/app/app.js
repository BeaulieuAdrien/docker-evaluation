const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use([
    helmet(),
    cors(),
    morgan('tiny'),
    hello()
]);

// Default route
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Load controllers
// TO DO

// Export app
module.exports = app;

