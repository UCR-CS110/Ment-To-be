const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const topics_schema = new Schema({
    topic : Number,
    mentors:[String],
    mentees:[String],
});


module.exports = Item = mongoose.model('Topic', topics_schema);