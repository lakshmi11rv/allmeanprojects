const express = require('express');

var app=express();
app.get('/', (req, res)=>{
    res.send("Welcome to Express JS Programming !!!");
});

app.listen(3000);

console.log("Server running on...")
