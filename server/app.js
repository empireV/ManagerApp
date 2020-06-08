var express = require('express');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

var listener = app.listen(process.env.PORT || 8081, 
    () => console.log(`Server start on port ${listener.address().port} ...`))

module.exports = app;
