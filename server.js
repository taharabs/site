const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Email configuration - using Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email content with professional styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'taharabs09@gmail.com',
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .footer { background: #eee; padding: 10px; text-align: center; font-size: 12px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c3e50; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Message From Your Portfolio</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message:</span><br>
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form</p>
              <p>© ${new Date().getFullYear()} Mohamed Tahar ABABSA</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);
    
    // Also save to a local file (optional)
    const fs = require('fs');
    const logData = `${new Date().toISOString()} - ${name} (${email}): ${subject}\n`;
    fs.appendFile('contact_log.txt', logData, (err) => {
      if (err) console.error('Error saving to log file:', err);
    });
    
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message. Please try again later.' 
    });
  }
});

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Portfolio backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});