var express = require('express');
var router = express.Router();
var request = require("request");
var empty = require('is-empty');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require('../models/user');

mongoose.connect('mongodb://localhost:27017/test');

router.post('/beers', function (req, res) {
    if (empty(req.body.query)) {
        res.send(405, "empty body...");
    }
    else {
        var beer = new Beer();
        beer.name = req.body.name;
        beer.type = req.body.type;
        beer.quantity = req.body.quantity;
        request(beer, function (error, response, body) {
            if (error) {
                res.send(response.statusCode);
            }
            else {
                res.send(response.statusCode, body);
            }
        });
    }
});
module.exports = router;