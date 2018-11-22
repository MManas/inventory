var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/routes/index.html');
})
app.get('/inventory', (req,res) => {
    res.sendFile(__dirname+"/inventory.json");
})
app.get('/cad.html', (req,res) => {
    res.sendFile(__dirname+"/routes/cad.html");
})


app.listen(80);