const express = require('express');
const dotenv = require("dotenv");
// Load config
dotenv.config({ path: "./config/.env" });
const app = express();



app.get("/t", (req, res)=>{
    console.log("hello get home")
    res.status(403).json({message: "FORBIDEN"});
})
module.exports = app;