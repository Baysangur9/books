const mongoose = require('mongoose')

const booksSchema = mongoose.Schema = {
    bookName: String,
    author : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: 'author'
    },

    genre: {
        type : mongoose.SchemaTypes.ObjectId,
        ref: 'genre'
    }
};

const Books = mongoose.model('Books',booksSchema)

module.exports = Books