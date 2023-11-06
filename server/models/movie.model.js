const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    rate: {
        type: String,
        required: [true, 'Rate is required']
    }
})

module.exports = mongoose.model("Movie", MovieSchema)