"use strict";

const express = require('express');
const router = express.Router();
const gameRouter = require('./../routes/games');
const userRouter = require('./../routes/users');
const tokenUtils = require('./../controllers/token_utils');
const dataHandler = require('./data_handler_users')

router.use('/games', gameRouter);
router.use('/users', userRouter);

router.use('/:email', tokenUtils.verifyToken);

router.get('/', (req, res) => {
    res.send("Final Project Jeopardy");
});

// Login

router.route('/login')
      .post((req, res) => dataHandler.login(req, res));

module.exports = router;
