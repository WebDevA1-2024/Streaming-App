const express = require('express');
const path = require('path');
const app = express();

// Set folder proyek sebagai folder publik
app.use(express.static(__dirname));

// Mengirim file HTML utama ketika root URL diakses
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
