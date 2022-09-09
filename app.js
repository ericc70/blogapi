const express = require('express');


const app = express();



app.get("/t", (req, res)=>{
    console.log("hello get home")
})
module.exports = app;