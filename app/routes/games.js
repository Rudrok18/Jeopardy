"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');
const Game = require('./../controllers/game');

const url = 'https://localhost:8000/games';

router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.status(400).json({message: "Error getting games", error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            res.status(404).json({ message: "Game not found" });
            return;
        }
        res.json(game);
    } catch (error) {
        res.status(400).json({ message: "Error getting game by ID" });
        return;
    }
});

router.post('/', async (req, res) => {
    try {
        const newGame = new Game(req.body);
        const savedGame = await newGame.save();
        res.status(200).json(savedGame);
    } catch (error) {
        res.status(400).json({ message: "Error creating new game", error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!updatedGame) {
            res.status(404).json({ message: "Game not found" });
            return;
        }
        res.json(updatedGame);
    } catch (error) {
        res.status(400).json({ message: "Error updating game", error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) {
            res.status(404).json({ message: "Game not found" });
            return;
        }
        res.json({ message: "Game deleted succesfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting game", error: error.message });
    }
});

module.exports = router;
