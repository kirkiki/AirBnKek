var express = require('express');
var router = express.Router();
var Users = require('../controllers/Users.js');
var Homes = require('../controllers/Homes.js');
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

router.get('/profile/:id', function (req, res, next) {
  var user = Users.getUser(req.params.id);
  if (!user) {
    res.redirect('/');
  } else {
    res.render('profile', {
      id: user.id,
      username: user.username,
      mail: user.mail,
      password: user.password
    });
  }
});

router.post('/profile/:id/update', function (req, res, next) {
  var user = Users.getUser(req.params.id);
  if (!user) {
    res.redirect('/');
  } else {
    var promise = new Promise((resolve, reject) => {
      resolve(Users.update(req, req.params.id));
    });
    promise.then(() => {
      res.redirect('/profile/' + req.params.id);
    }).catch(() => {
      res.redirect('/profile/' + req.params.id);
    })
  }
});

module.exports = router;