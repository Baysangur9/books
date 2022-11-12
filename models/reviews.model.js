const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema = {
    text: String,
    reviewsAuthorName: String,
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    }
   
      
}




const Review = mongoose.model('Review',reviewsSchema)


module.exports = Review