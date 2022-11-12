const Books = require('../models/books.model')

module.exports = {
   addBooks: (req, res) => {
   Books.create({
    bookName: req.body.bookName,
    author: req.body.author,
    genre: req.body.genre
   }).then((a) =>{
    res.json(a)
   }).catch({'error': 'Error adding books'})
 },

  delBooks: (req,res) => {
    Books.findByIdAndDelete(req.params.booksId).then(() => {
        res.json('Books delete succesfuly')
    }).catch({'error': 'Error delete books'})
  },

  updateBooks: (req, res) => {
    Books.findByIdAndUpdate( req.params.booksId,  {
     bookName: req.body.bookName,
     author: req.body.author,
     genre: req.body.genre,
     
    }) 
  }

}