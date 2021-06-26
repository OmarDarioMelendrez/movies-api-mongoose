const express = require('express')
const router = express.Router();
const movieSearchRouter = require('./movieSearchRouter');
const usersRouter = require('./users');
const favoritesRouter = require('./favoritesRouter');
const authRouter = require('./authRouter');

router.use("/movie", movieSearchRouter)
router.use('/users', usersRouter)
router.use("/auth", authRouter)
router.use("/favorites", favoritesRouter)


module.exports = router