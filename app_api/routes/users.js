 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty = require('is-empty');
 var userController = require('../controllers/users');
 var mongo = require('mongodb').MongoClient;
 var assert = require('assert');
 var jwt = require('express-jwt');
 var auth = jwt({
     secret: 'MY_SECRET'
     , userProperty: 'payload'
 });

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');


router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/data', function (req, res) {
    // console.log(req.body);
     userController.createUser(req, function (err, userData) {
         if (err) {
             res.json(err);
         }
         else {
             res.json(userData);
         }
     });
 });
 router.get('/data', function (req, res) {
     userController.retrieveUser(function (userData) {
         if (userData) {
             res.json(userData);
         }
         else {
             res.send(401, "data not found in mongo document");
         }
     });
 });
 module.exports = router;