module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ status: 'error', message: 'All fields are required' });
  }

  // Basic logging for now. Replace with email/db integration as needed.
  console.log(`[Contact] Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

  return res.status(200).json({ status: 'success', message: 'Message received' });
};
