var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const firebase = require('firebase');
const graphqlHTTP = require('express-graphql').graphqlHTTP

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
app.use('*', cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const phoneSchema = require('./graphql').phoneSchema
app.use('/graphql', cors(), graphqlHTTP({
    schema: phoneSchema,
    rootValue: global,
    graphiql: true
}))

module.exports = app;
