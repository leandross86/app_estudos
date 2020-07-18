const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');
const userRouter = require('..routes/user-router');
const app = express();

app.use(bodyParser.json());
app.user(bodyParser.urlencoded({extended:false}));

module.exports = app;

mongoose.connect(variables.Database.connection, { useUnifiedTopology: true, userNewUrlParser: true, userCreateIndex: true })

app.use('/api/user',userRouter )