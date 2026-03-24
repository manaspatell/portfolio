const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from /static
app.use('/static', express.static(path.join(__dirname, 'static')));
// Also serve the public folder so /public/... URLs work (images, certificates, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Helper to send the main HTML (single-page sections)
function sendIndex(req, res) {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
}

app.get('/', sendIndex);
app.get('/projects', sendIndex);
app.get('/about', sendIndex);
app.get('/contact', sendIndex);

// API endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ status: 'error', message: 'All fields are required!' });
    }

    console.log(`[Contact] Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    // TODO: Add database or email sending logic here
    return res.json({ status: 'success', message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error handling contact form:', err);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
