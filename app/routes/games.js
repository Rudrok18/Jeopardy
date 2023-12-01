"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');
const Game = require('./../controllers/game')

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

router.post('/', async (req, res) => {
    try {
    const newGame = new Game(req.body);
    const savedGame = await newGame.save();
    console.log(req.body);
    res.status(200).json(savedGame);
    } catch (err) {
        res.status(400).send("Error");
    }
    });

/*router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.();
        if (!de)
    }
})*/

module.exports = router;