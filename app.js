const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(mainRouter);

app.listen(3000);