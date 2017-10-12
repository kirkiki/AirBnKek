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

router.get('/home/:id', function (req, res, next) {
  res.render('home', {
    id: req.params.id
  });
});

router.get('/profil/:id', function (req, res, next) {
  var user = Users.displayUserProfil(req, res);
  next();
})

module.exports = router;