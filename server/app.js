var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

var usersRouter = require('./routes/users');

let mongoUrl = `mongodb+srv://dbTest:${process.env.MONGO_ATLAS_PSW}@cluster0-xcma5.mongodb.net/${process.env.MONGO_ATLAS_DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(mongoUrl, {useNewUrlParser: true}).
    catch(error => console.log(error))

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

var listener = app.listen(process.env.PORT || 8081, 
    () => console.log(`Server start on port ${listener.address().port} ...`))

module.exports = app;
