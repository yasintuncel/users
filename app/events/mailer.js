const events = require('events');

const mailer = events.EventEmitter();

mailer.on('send_email', async (data) => {
    console.log('event alindi.');

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: 'Users - Microservices Arc',
        ...data
    });
});

module.exports = mailer;