/**
 * Created by vaibhav on 29/5/17.
 */

//dependencies
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

//mongo
mongoose.connect('mongodb://localhost/vaibhav');

//express
var app = express();
app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());


// app.get('/' , function (req,res) {
//     res.send('Hello World');
// });

// routes
app.use('/api',require('../routes/api'));

//Start server
app.listen(3000);
console.log('API is running on PORT 3000');