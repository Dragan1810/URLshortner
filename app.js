const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/route');
const URLy = require('./models/url');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://Dragan:Dragan@ds141232.mlab.com:41232/url-short")


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use('/',routes);



app.listen(3000,()=>console.log("Server Runing!!!"));