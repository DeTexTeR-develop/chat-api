const mongoose = require('mongoose');
  
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    type: String
},
{
    timestamps: true,
    collection: 'users'
});


module.exports = mongoose.model('User', userSchema);