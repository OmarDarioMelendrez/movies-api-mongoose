const Favorite = require('../models/Favorite')
const User = require('../models/User')

// add a favorite movie
const addFavorite = async (req,res,next) => {
    try {
        const user = await User.findById(req.user.id)
        // const user = await User.findById(req.body.userId)
        const newFavorite = await Favorite.create({
            imdbID: req.body.imdbID,
            Title: req.body.Title,
            Poster: req.body.Poster,
            userId: user.id
        })
        user.favorites = user.favorites.concat(JSON.stringify(newFavorite))
        await user.save()
        
        res.send(newFavorite)
    } catch (err) {
        next(err)
    }
} 
// get favorites of a user
const getFavoritesOfUser = async (req,res,next) => {
    try {
        console.log("busca favoritoooos");
        const favorites = await Favorite.find({
            userId: req.user.id
        })
        res.send(favorites)
    } catch (err) {
        next(err)
    }
}

// delete favorite of a user
const deleteFavoriteOfUser = async (req,res,next) => {
    try {
        const deletedFavorite = await Favorite.deleteOne({
            imdbID: req.params.movieId
        })
        const user = await User.findById(req.user.id)
        user.favorites = user.favorites.filter(fav => JSON.parse(fav).imdbID != req.params.movieId)
        await user.save()
        const favorites = await Favorite.find({
            userId: req.user.id
        })
        res.send(favorites)    
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addFavorite,
    getFavoritesOfUser,
    deleteFavoriteOfUser
}