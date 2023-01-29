
//express
const express = require('express');
//refresh
const morgan = require('morgan');
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//boday parser
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

//for each router
const underscore = require('underscore');
//database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user:"root",
//     password:"8001661991",
//     database:"prueba"
// });


connection.connect((err) => {
    if(err) throw err;
    console.log("Connected to mysql server okay");
});
const db = require('./src/sample.json');

module.exports = {
    api: {
        db: connection,
        underscore: underscore,
        app:app,
        port: process.env.API_PORT || 3000, 
    },
    
}