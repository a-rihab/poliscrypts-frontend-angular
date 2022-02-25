function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const path = require('path');

const app = express();

app.use(requireHTTPS);

app.use(express.static(__dirname + '/dist/poliscrypts-frontend'));

app.get('/*', function (req, res) {
    //res.sendFile(path.join(__dirname, 'poliscrypts-frontend', 'index.html'));
    res.sendFile('index.html', { root: 'dist/poliscrypts-frontend/' })
})

app.listen(process.env.PORT || 5000);