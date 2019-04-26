
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var puppySchema = new Schema({
    name: String,
    breed: String,
    age: Number
})
module.exports = mongoose.model('Puppy', puppySchema);