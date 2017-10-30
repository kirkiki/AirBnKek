var express = require('express');
var router = express.Router();
var Users = require('../controllers/Users');

router.get('/', (req, res, next) => {
    res.status(200); 
    res.render('signUp');
});

module.exports = router;