const chalk = require('chalk');
const Users = {
    userList: [{
            "id": 1,
            "mail": "aria.groult@ynov.com",
            "username": "Aria",
            "password": "azerty"
        },
        {
            "id": 2,
            "mail": "ronan.robnineau@ynov.com",
            "username": "Ronan",
            "password": "ka7rba"
        }
    ],

    login: function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var loginSuccessfull = false;

        for (let i = 0; i < Users.userList.length; i++) {
            if (Users.userList[i].username === username) {
                if (Users.userList[i].password === password) {
                    loginSuccessfull = true;
                    var newUser = {
                        username: username,
                        password: password,
                        mail: Users.userList[i].mail,
                        id: Users.userList[i].id
                    }
                    res.status(200).redirect('/home/' + Users.userList[i].id);
                }
            }
        }
        if (loginSuccessfull === false) {
            console.log(chalk.red.bgWhite('Username or password incorrect'));
        }
    },

    displayUserProfil: function (req, res, next) {

    }
}

module.exports = Users;