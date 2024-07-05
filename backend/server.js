const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
// require('dotenv').config();
// const BASE_URL = process.env.BASE_URL;
// console.log(BASE_URL);
const uri ="mongodb+srv://shreyaa2802:<password>@cluster0.iji1v8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const PORT = 5001; // Change port number
app.use(express.json());
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

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
