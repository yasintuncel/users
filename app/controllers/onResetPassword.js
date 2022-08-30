const httpStatus = require("http-status");
const randomstring = require("randomstring-yt");
const helpers = require("../helpers");
const service = require("../services");
const events = require("../events");

function onResetPassword(req, res) {
    const newPassword = randomstring({
        lowersCount: 5,
        uppersCount: 4,
        numbersCount: 5,
    });

    console.log(newPassword);
    service.resetPassword(req.body.email, { passwordHash: helpers.encryptPassword(newPassword) })
        .then((updatedUser) => {
            if (!updatedUser)
                return res.status(httpStatus.NOT_FOUND).send({ error: 'Email not found' })

            events.mailer.emit('send_email', {
                to: `${updatedUser.email}`,
                subject: "New Password", // Subject line
                html: `<b>Hello world?</b> <br/>New Password: ${newPassword}`, // html body 
            });
            return res.status(httpStatus.OK).send({ message: 'Email sended' });
        }).
        catch(e => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: 'Can not change password' });
        });

}

module.exports = onResetPassword;