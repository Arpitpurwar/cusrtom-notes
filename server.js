const express = require('express');
const body = require('body-parser');
const fs = require('fs');
var port = JSON.parse(fs.readFileSync('package.json'));
const app = express();
app.use(body.urlencoded({extended:true}));
app.use(body.json());

//Database configuration
const mongoose = require('mongoose');
const dbconfig = require('./config/database.config');
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url)
.then(()=>{console.log("Database is connected");})
.catch(err=>{console.log("can not connect to databse"+err)
process.exit();
});

// Staring the App

app.get('',(req,res)=>{res.json({"message":'This Is easy notes app'});});
// For Crud operation
const route = require('./app/routes/notes.routes')(app);




// Server started
app.listen(4000,()=>{console.log(`port ${port.webserver.port} is working`);})