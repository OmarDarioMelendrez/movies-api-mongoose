const express = require("express");
const router = express.Router();
const {
	getMovieById,
	getMovieByTitle,
} = require("../controllers/moviesControllers");
// const { auth } = require("../controllers/authControllers");

// get single movie by id
// router.get("/id/:id", auth,getMovieById);
router.get("/id/:id", getMovieById);
// get movies by title
// router.get("/:movie", auth,getMovieByTitle);
router.get("/:movie", getMovieByTitle);

module.exports = router;
