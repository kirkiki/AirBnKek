const chalk = require('chalk');
const Users = {
    userList: [{
            "mail": "aria.groult@ynov.com",
            "username": "Aria",
            "password": "azerty"
        },
        {
            "mail": "ronan.robnineau@ynov.com",
            "username": "Ronan",
            "password": "ka7rba"
        }
    ],

    login: function (req, res, callback) {
        var username = req.body.username;
        var password = req.body.password;
        var loginSuccessfull = false;

        for (let i = 0; i < Users.userList.length; i++) {
            if (Users.userList[i].username === username) {
                if (Users.userList[i].password === password) {
                    loginSuccessfull = true;
                    res.status(200).redirect('/home');
                }
            }
        }
        if (loginSuccessfull === false) {
            console.log(chalk.red.bgWhite('Username or password incorrect'));
        }
    }
}

module.exports = Users;