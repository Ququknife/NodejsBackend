var express = require('express');
var router = express.Router();
var Login = require('../models/Login');

router.post('/', function (req, res, next) {

    Login.userLogin(req, req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});

module.exports = router;