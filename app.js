const express = require('express');

const dotenv = require("dotenv");
// const mongoose = require("mongoose");

const connectDB = require("./config/db");
// Load config
dotenv.config({ path: "./config/.env" });
connectDB();
const app = express();
// schema mongo
const articles = require('./model/article')
const category = require('./model/category')
const Tag = require('./model/tag')
const user = require('./model/user')




//body parser
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// app.post('/api/tag', (req, res, next) => {
  
//   });
  
module.exports = app