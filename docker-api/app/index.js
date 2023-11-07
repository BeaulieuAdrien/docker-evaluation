const express = require('express');

const helmet = require('helmet');

const app = express();

app.use([
    helmet(),
]);

// Default route
app.get('/', (req, res) => {
    console.log('oui oui');
    res.send('Hello world');
});

// Load controllers
app.use('/vehicules', require('@@app/controllers/vehicule.controller'));

// Export app
module.exports = app;

