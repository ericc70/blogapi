const express = require('express');

const dotenv = require("dotenv");
// const mongoose = require("mongoose");

const connectDB = require("./config/db");
// Load config
dotenv.config({ path: "./config/.env" });
connectDB();
const app = express();



app.get("/t", (req, res)=>{
    console.log("hello get home")
    res.status(403).json({message: "FORBIDEN"});
})
module.exports = app