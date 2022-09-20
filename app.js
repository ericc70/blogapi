const express = require('express');

const dotenv = require("dotenv");
 const mongoose = require("mongoose");

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


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use('/api/user', userRoutes);
app.use('/api/tag', tagRoutes);
app.use('/api/article', articleRoutes);


// app.post('/api/tag', (req, res, next) => {
  
//   });
  
module.exports = app