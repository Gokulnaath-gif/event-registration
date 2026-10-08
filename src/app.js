const express = require('express');
const path = require('path');

const app = express();

const eventFolder = path.join(__dirname, '../event');

// Serve HTML, CSS and JavaScript
app.use(express.static(eventFolder));

// Main page
app.get('/', (req, res) => {
    res.sendFile(path.join(eventFolder, 'index.html'));
});

// Use ByteXL/deployment provided port
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});