const express = require('express');

const app = express();

app.listen(8080, function() {
    console.log('Server started on http://localhost:8080/');
});

app.use(express.static('public'));
app.use(express.static('node_modules'));