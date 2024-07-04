const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001; // Change port number

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Subscription endpoint
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log('Received subscription request for email:', email);

  // Here you would typically save the email to your database

  res.status(200).json({ message: 'Subscription successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
