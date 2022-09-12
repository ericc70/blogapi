const express = require('express');

const dotenv = require("dotenv");
// const mongoose = require("mongoose");

const connectDB = require("./config/db");
const tagRoutes = require('./route/tag')
const articleRoutes = require('./route/article')
const userRoutes = require('./route/user')


// Load config
dotenv.config({ path: "./config/.env" });
connectDB();
const app = express();
// route





//body parser
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/tag', tagRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/user', userRoutes);

// app.post('/api/tag', (req, res, next) => {
  
//   });
  
module.exports = app