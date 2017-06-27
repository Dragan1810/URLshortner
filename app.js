const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.get('/',(req,res,next)=>{
    res.render('index');
})


app.listen(3000,()=>console.log("Server Runing!!!"));