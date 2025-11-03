const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve all files in current directory

// Serve your main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'taharsite6.0.html'));
});

// Serve other HTML pages
app.get('/unet', (req, res) => {
    res.sendFile(path.join(__dirname, 'UNet.html'));
});

app.get('/medical-equipment', (req, res) => {
    res.sendFile(path.join(__dirname, 'medicalEquipmentEngineer.html'));
});

app.get('/electronic-skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'practicalElectronicSkills.html'));
});

// Your existing API routes can go here
app.get('/api', (req, res) => {
    res.json({ message: 'Portfolio backend server is running!' });
});

// Contact form endpoint (if you have one)
app.post('/api/contact', (req, res) => {
    // Your contact form logic here
    res.json({ message: 'Message received!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});