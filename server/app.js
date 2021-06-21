const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes=require('./routes/user');
const {API_VERSION} = require("./config");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`,userRoutes);


module.exports = app;
