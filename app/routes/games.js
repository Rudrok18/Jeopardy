"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => {
        const games = dataHandler.getGames();
        res.json(games);
    })

router.route('/games')
        .post((req, res) => {
            res.send('POST request to /games endpoint')
        });

router.route('/:id')
    .get((req, res) => {
        res.send(`GET request to /${req.params.id} endpoint`);
    })

module.exports = router;