var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var bookModule = new Schema({
    title : {type: String},
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false}
});

module.exports = mongoose.model('book', bookModule);