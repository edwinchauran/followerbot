// srca
// hay que ver que modelo usar
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    accountToFollow: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Account', AccountSchema);