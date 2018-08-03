const express = require('express');
const hbs = require('hbs');
const path = require('path');

var app = express();

app.set("engine",hbs);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    // res.send('<h1>Hello Express!!!!!</h1>');
    res.render('index');
});

app.listen(process.env.PORT || 3000);