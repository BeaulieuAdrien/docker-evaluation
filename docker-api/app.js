const express = require('express');
const app = express();
const port = 3000;

// Main route
app.get('/', (req, res) => {
    res.send('API is alive');
})

// Start server
app.listen(port, () => {
    console.log(`API started on port ${port}`)
});