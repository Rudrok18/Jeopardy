"use strict";

const express = require('express');
const router = express.Router();
const gameRouter = require('./../routes/games');
const adminGameRouter = require('./../routes/admin_games');

router.use('/games', gameRouter);
router.use('/admin_games', validateAdmin, adminGameRouter)

router.get('/', (req, res) => {
    res.send("Final Project Jeopardy");
})

function validateAdmin(req, res, next) {
    let adminToken = req.get('x-auth');
    if (adminToken == undefined || adminToken != "admin") {
        res.status(403).send("Not authenticated");
    }
    next();
}

module.exports = router;