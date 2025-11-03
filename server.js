const express = require('express');
const path = require('path');
const app = express();

// Serve all files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Serve your main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'taharsite6.0.html'));
});

// (Optional) Example route if you send emails from backend
// app.post('/send-email', async (req, res) => {
//   // your email logic here
//   res.json({ success: true });
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
