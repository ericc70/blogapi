const express = require('express')

const app = express()
app.get("/", (req, res)=>{
    console.log("hello get home")
})
app.listen(3000)
console.log("test")