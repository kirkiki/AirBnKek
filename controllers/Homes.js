const chalk = require('chalk');
let userList = require('../data/usersData');
let homeList = require('../data/homesData');
const Homes = {
    getHomes: function () {
        return homeList.homes;
    },
    getHome: function (id) {
        for (let i = 0; i < homeList.homes.length; i++) {
            if (id == homeList.homes[i].id) {
                return homeList.homes[i];
            }
        }
        return status;
    },
    book: function (user, home, formData) {
        for (let i = 0; i < homeList.homes.length; i++) {
            if (home.id == homeList.homes[i].id) {
                homeList.homes[i].booked = true;
                homeList.homes[i].bookingInfo = formData;
                homeList.homes[i].bookedBy = user.id;
            }
        }
    },
    getSearchHome: function (str) {
        let reg = new RegExp(str, "g");
        for (let i = 0; i < homeList.homes.length; i++) {
            if (homeList.homes[i].title.match(reg)) {
                return homeList.homes[i];
            }
        }
        return null;
    }
}

module.exports = Homes;