const Genres = require('../models/genres.model')

module.exports = {
   addGenre: (req, res) => {
    Genres.create({
        genreName: req.body.genreName,
        description: req.body.description
    }).then((genre) => {
        res.json(genre)
    }).catch({'error': "Error adding genre"})
   },

   delGenre: (req, res) => {
    Genres.findByIdAndDelete(req.params.genreId).then((genre)=> {
        res.json('Genres delete succesfuly')
    }).catch({'error': "Error delete author"})
   },

   updateGenre: (req,res) => {
    Genres.findByIdAndUpdate(req.params.genreId, {
        genreName: req.body.genreName,
        description: req.body.description,
    }, {new: true}).then((genre) => {
        res.json(genre)
    }).catch({"error": "Error updating genre"})
   }
}