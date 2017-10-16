var express = require('express');
var router = express.Router();
var Homes = require('../controllers/Homes');
var Users = require('../controllers/Users');
var chalk = require('chalk');



router.get('/:id', (req, res, next) => {
    let homes = Homes.getHomes();
    var user = Users.getUser(req.params.id);
    if (!user) {
        res.redirect('/');
    } else {
        res.render('home', {
            id: req.params.id,
            homes: homes
        });
    }
});
router.get("/:id/search", (req,res,next)=> {
    
    var home = Homes.getSearchHome(req.query.search)
    res.render("home", {
        id: req.params.id,   
        homes: [home]
    })
});

router.get('/:idUser/details/:idHome', (req, res, next) => {
    let data = {};
    data.user = Users.getUser(req.params.idUser);
    let promise = new Promise((resolve, reject) => {
        data.home = Homes.getHome(req.params.idHome);
        if (!data.home) {
            reject();
        }
        console.log(data);
        resolve();
    });
    promise.then(() => {
        res.render('homeDetails', data);
    }).catch(() => {
        res.redirect('/home/' + req.params.idUser);
    });
});

router.get('/:idUser/book/:idHome', (req, res, next) => {
    res.render('book', {
        idUser: req.params.idUser,
        idHome: req.params.idHome
    });
});

router.post('/:idUser/book/:idHome', (req, res, next) => {
    let user = Users.getUser(req.params.idUser);
    let home = Homes.getHome(req.params.idHome);
    let formData = {};
    formData.startDate = req.body.startDate;
    formData.endDate = req.body.endDate;
    new Promise((resolve, reject) => {
        Homes.book(user, home, formData);
        resolve();
        reject();
    }).then(() => {
        res.status(200).redirect('/home/' + req.params.idUser + '/details/' + req.params.idHome);
    }).catch(() => {
        console.log('thing didnt work bro')
    });
});

module.exports = router;