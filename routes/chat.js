var express = require('express');
var router = express.Router();
var chalk = require('chalk');

router.get('/:idUser', (req, res, next) => {
    let user = req.params.idUser;
    res.render('chat', {
        userId: user
    });
});

module.exports = router;