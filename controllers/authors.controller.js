const Author = require('../models/authors.model')

module.exports = {
   addAuthor :( req, res) => {
     Author.create ({
        authorName: req.body.authorName,
        biography: req.body.biography
     }).then((author) => {
          res.json(book)
     }).catch({'error': "Error adding author"})
   },

   delAthor : (req, res) => {
     Author.findByIdAndDelete(req.params.authorId).then((book) => {
        res.json('Author delete succesfuly')
     }).catch({'error': "Error delete author"})
   },

   updateAuthor: (req, res) => {
    Author.findByIdAndUpdate(req.params.bookId, {
        bookName: req.body.bookName,
        author: req.body.author,
        genre: req.body.genre,
    }, {new: true}).then((book) => {
        res.json(book)
    }).catch({"error": "Error updating book"})
  },

  getBooksById: (req,res) => {
    Author.findById(req.params.bookId).then((book) => {
        res.json(book)
    }).catch({'error': 'Error updating books'})
  },

  getBooks: (req,res) => {
    Author.find().then((book) => {
      res.json(book)
    }).catch({'error': 'Error updating books'})
  },
  getBooksByGenre: (req, res) => {
    Author.find().then((book) => {
        res.json(book)
    }).catch({'error': 'Error updating books'})
  },
}