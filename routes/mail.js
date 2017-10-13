var express = require('express');
var router = express.Router();
var mailer = require('../nodemailer');
var Users = require('../controllers/Users');

router.get('/:senderId/:receiverId', function (req, res, next) {
    res.render('sendMail', {
        senderId: req.params.senderId,
        receiverId: req.params.receiverId
    });
});

router.post('/:senderId/:receiverId', function (req, res, next) {
    let sender = Users.getUser(req.params.senderId);
    let senderMail = sender.mail;
    let senderMailPassword = sender.mailPassword;
    let receiverMail = Users.getUser(req.params.receiverId).mail;
    let subject = req.body.subject;
    let message = req.body.message;

    new Promise((resolve, reject) => {
        mailer.sendMail('smtp.gmail.com', 25, false, {
            user: senderMail,
            pass: senderMailPassword
        }, senderMail, receiverMail, subject, message, () => {
            resolve();
        });
    }).then(() => {
        res.redirect('/home/' + req.params.senderId);
    }).catch(() => {
        console.log('mail not sent');
    });
});



module.exports = router;