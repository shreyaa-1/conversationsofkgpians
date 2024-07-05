const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
require('dotenv').config();
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL);
const corsOptions ={
  origin:`${BASE_URL}`, 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
const formRouter = require("./Routes/formRoute");
const subscriptionRouter = require("./Routes/subscriptionRoute");
const uri ="mongodb+srv://shreyaa2802:brAeWfJMHTo5OGfj@cluster0.iji1v8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5000;
app.use(express.json());
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));
  app.use("/form", formRouter);
  app.use("/subscription",subscriptionRouter );
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
