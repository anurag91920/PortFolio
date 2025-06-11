require('dotenv').config(); // Load .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { SMTPClient } = require('emailjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new SMTPClient({
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASS,
  host: 'smtp.gmail.com',
  ssl: true,
});

app.post('/send-email', (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  const emailMessage = {
    text: `
    Name: ${name}
    Email: ${email}
    Mobile: ${mobile}
    Subject: ${subject}
    Message: ${message}
    `,
    from: `${name} <${email}>`,
    to: process.env.EMAIL_TO,
    subject: subject || 'New Contact Form Message',
  };

  client.send(emailMessage, (err, message) => {
    if (err) {
      console.error('Email Error:', err);
      return res.status(500).json({ success: false, error: err });
    }
    console.log('Email sent!', message);
    res.status(200).json({ success: true });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
