const chalk = require('chalk');
let userList = require('../data/usersData');
let User = require('../models/user');
const guid = require('guid');

const Users = {

    signUp: function(req, res, next){
        let user = new User({
            id: guid.create(),
            mail: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        console.log(user);
    },

    login: function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var loginSuccessfull = false;

        for (let i = 0; i < userList.users.length; i++) {
            if (userList.users[i].username === username) {
                if (userList.users[i].password === password) {
                    loginSuccessfull = true;
                    var newUser = {
                        username: username,
                        password: password,
                        mail: userList.users[i].mail,
                        id: userList.users[i].id
                    }
                    res.status(200).redirect('/home/' + userList.users[i].id);
                }
            }
        }
        if (loginSuccessfull === false) {
            console.log(chalk.red.bgWhite('Username or password incorrect'));
        }
    },

    getUser: function (id) {
        for (var i = 0; i < userList.users.length; i++) {
            if (userList.users[i].id == id) {
                return userList.users[i];
            }
        }
    },

    update: function (req, id) {
        let formData = {};
        formData.username = req.body.username;
        formData.mail = req.body.mail;
        formData.password = req.body.password;

        for (let i = 0; i < userList.users.length; i++) {
            userList.users[i].username = formData.username;
            userList.users[i].mail = formData.mail;
            userList.users[i].password = formData.password;
        }
    }
}

module.exports = Users;