const mongoose = require('mongoose');

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const NewsSchema = new Schema({
    startday: {
        type: String
    },
    topnews: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    deadline: {
        type: String
    }

},{versionKey: false})

module.exports = mongoose.model('newschannel', NewsSchema)