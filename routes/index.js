var express = require('express');
var router = express.Router();
var Users = require('../controllers/Users.js');
var chalk = require('chalk');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/login', function (req, res, next) {
  Users.login(req, res)
});

router.get('/home', function (req, res, next) {
  res.render('home');
})

module.exports = router;