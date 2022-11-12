const { Router } = require('express')
const {booksController} = require('../controllers/books.controller')

const booksRoute = require('./books.route')
const authorsRoute = require('./authors.route')
const genresRoute = require('./genres.route')
const reviewsRoute  = require('./reviews.route')

const  router =  Router()

router.use('/books', require('../routes/books.route'))
router.use('/authors',require('./authors.route'))
router.use('/genres',require('./genres.route'))
router.use('/reviews',require('./reviews.route'))




module.exports = router