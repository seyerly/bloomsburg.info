const express = require('express');
const routes = require('./routes/index');

const app = express();
app.use('/', routes);
app.use(express.static('views'));

module.exports = app;

