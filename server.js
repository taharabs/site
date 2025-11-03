const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../')); // Go up one level to root

// Serve your main portfolio page with error handling
app.get('/', (req, res) => {
    console.log('Serving main portfolio page...');
    res.sendFile(path.join(__dirname, 'taharsite6.0.html'), (err) => {
        if (err) {
            console.log('Error serving taharsite6.0.html:', err);
            res.status(500).json({ 
                error: 'File not found', 
                message: 'taharsite6.0.html could not be found',
                files: require('fs').readdirSync(__dirname)
            });
        }
    });
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