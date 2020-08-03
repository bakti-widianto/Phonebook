var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCFagSBEqolX8ymq5n4RQ46HAQGGolGXWc",
    authDomain: "phonebook-6e223.firebaseapp.com",
    databaseURL: "https://phonebook-6e223.firebaseio.com",
    projectId: "phonebook-6e223",
    storageBucket: "phonebook-6e223.appspot.com",
    messagingSenderId: "29565688711"
};
firebase.initializeApp(config);





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
