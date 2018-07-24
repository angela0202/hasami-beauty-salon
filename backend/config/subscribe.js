const mongoose = require('mongoose');

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const SubscribeSchema = new Schema({
    email: {
        type: String
    }
},{versionKey: false})

module.exports = mongoose.model('subscribechannel', SubscribeSchema)