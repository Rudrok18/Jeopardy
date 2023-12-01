"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');
const Game = require('./../controllers/game');

const url = 'https://localhost:8000/games';
console.log('Fetching data from:', url);

/*fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));*/

router.route('/')
    .get((req, res) => {
        let query = req.query.filter;

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
        const newGame = new Game(req.body.title, req.body.categories, req.body.imgUrl);
        dataHandler.createGame(newGame);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(400).send("Game not created");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const gameToUpdate = dataHandler.getGameById(req.params.id);
        if (!gameToUpdate) {
            res.status(404).send("Game not found");
            return;
        }
        dataHandler.updateGame(req.body.id, gameToUpdate);
        res.status(200).json(gameToUpdate);
    } catch (err) {
        res.status(400).send("Game not updated");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        dataHandler.deleteGame(req.params.id);
        res.status(200).send("Game deleted");
    } catch (err) {
        res.status(400).send("Game not deleted");
    }
});

module.exports = router;