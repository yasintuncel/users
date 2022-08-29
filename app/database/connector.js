const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once('open', () => { console.log('DB baglantisi basarili') });

const connectDB = async function () {
    await Mongoose.connect('mongodb://127.0.0.1:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {
    connectDB,
}