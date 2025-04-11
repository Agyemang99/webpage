// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
    auth: {
        user: 'douglasagyeman9@gmail.com', // Replace with your email
        pass: 'jwqy tabo tzlg soxx', // Replace with your email password or app-specific password
    },
});

// Email sending endpoint
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'douglasagyeman9@gmail.com', // Sender address
        to: 'douglasagyeman9@gmail.com', // Receiver address (can be the same as sender)
        subject: `New Message from ${name}`, // Email subject
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});;