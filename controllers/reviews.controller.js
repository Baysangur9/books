const Review = require('../models/reviews.model')

module.exports = {
   addReview: (req,res) => {
    Review.create({
        text: req.body.text,
        reviewsAuthorName: req.body.reviewsAuthorName,
        book: req.body.book
    }).then((r) =>{
        res.json(r)
    }).catch({'error': "Error adding review"}) 
   },

   delReviw: (req,res) => {
     Review.findByIdAndDelete(req.params.reviewId).then((review) => {
       res.json('Review delete succesfuly')
     }).catch({'error': "Error delete review"})
       
   },
   getRewiews: (req, res) => {
    Review.find().then((a) => {
        res.json(a)
    }).catch({"error": "Error adding review"})
}
}