const express = require('express');
const app = express();
app.listen(8080);

const api = require('./Api');
app.use('/', api);