const nodemailer = require('nodemailer');

const mailer = {
    createTransporter: function (host, port, secure, auth) {
        let transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: secure, // true for 465, false for other ports
            auth: auth
        });
        return transporter;
    },

    setMailOptions: function (from, to, subject, text) {
        let mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };
        return mailOptions;
    },

    sendMail: function (host, port, secure, auth, from, to, subject, text, callback) {
        mailer.createTransporter(host, port, secure, auth).sendMail(mailer.setMailOptions(from, to, subject, text), (error, info) => {
            if (error) {
                throw error;
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
        callback();
    }

}

module.exports = mailer;