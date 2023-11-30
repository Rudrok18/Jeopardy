"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => {
        let query = req.query.fitler;

        let games;

        if (query == undefined) {
            try {
                games = dataHandler.getGames();
            } catch(e) {
                res.status(400).send("Error");
            }
            res.status(200).json(games);
        }
    })

router.route('/:id')
    .get((req, res) => {
        let uuid = req.params.id;
        let game = dataHandler.getGameById(uuid);

        if (game != undefined) {
            res.status(200).json(game)
        } else {
            res.status(400).send("ID not found")
        }
    })

module.exports = router;