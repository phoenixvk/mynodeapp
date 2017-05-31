/**
 * Created by vaibhav on 29/5/17.
 */
var express = require('express');
var router = express.Router();


var Product = require('../models/products');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

module.exports = router;