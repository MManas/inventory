var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var myParser = require('body-parser');

app.use(myParser.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/routes/index.html');
})
app.get('/inventory', (req,res) => {
    res.sendFile(__dirname+"/cad.json");
})
app.get('/cad.html', (req,res) => {
    res.sendFile(__dirname+"/routes/cad.html");
})
app.post('/cadupdate', (req, res) => {
    fs.writeFile(__dirname+"/cad.json", JSON.stringify(req.body), () => {
    })
})


app.listen(80);
