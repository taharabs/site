const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Only the image folder is public; pages are served by the routes below, so source files
// such as server.js and package.json are never downloadable.
app.use('/image', express.static(path.join(__dirname, 'image')));

// Serve your main portfolio page with error handling
app.get('/', (req, res) => {
    console.log('Serving main portfolio page...');
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            console.log('Error serving index.html:', err);
            res.status(500).json({ error: 'Page unavailable' });
        }
    });
});

// Other addresses of the home page, kept so existing links still work
app.get(['/index.html', '/taharsite6.0.html'], (req, res) => {
    res.redirect(301, '/');
});

// Serve other HTML pages
app.get('/UNet.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'UNet.html'));
});

app.get('/medicalEquipmentEngineer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'medicalEquipmentEngineer.html'));
});

app.get('/practicalElectronicSkills.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'practicalElectronicSkills.html'));
});

// Your existing API routes
app.get('/api', (req, res) => {
    res.json({ message: 'Portfolio backend server is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});