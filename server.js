const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/poliscrypts-frontend/index.html'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/poliscrypts-frontend/index.html'));
})

app.listen(process.env.port || 8080);