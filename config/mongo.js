const mongoose = require('mongoose');

const connectionURL = `mongodb://localhost:27017/chatdb`;

const db = mongoose.connection;

mongoose.connect(connectionURL);
db.on('connected', () => {
    console.log('Db Connected');
})

db.on('error', (error) => {
    console.log('Db Error ', error);
});



