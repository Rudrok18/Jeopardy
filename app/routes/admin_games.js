"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .post((req, res) =>{
        let game = req.body;
        try {
            dataHandler.createGame(game);
        } catch (e) {
            res.status(400).send("Object not recieved");
        }
        res.send("Game created succesfully")
    });

router.route('/:id')
    .put((req, res) => {
        let id = req.params.id;
        let product = req.body;

        try {
            dataHandler.updateGame(id);
        } catch (e) {
            res.status(404).send("ID not found");
        }
        res.send("Game updated successfully");
    })

    .delete((req, res) => {
        let id = req.params.id;
        let game = req.body;

        try {
            dataHandler.deleteGame(id);
        } catch (e) {
            res.status(404).send("ID not found");
        }
        res.send("Game deleted successfully");
    })

module.exports = router;