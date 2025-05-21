const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: false
    },
    pages: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
