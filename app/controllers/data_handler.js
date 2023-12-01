"use strict";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require('fs');
const Game = require('./game');
const path = require("path");

let content = fs.readFileSync('app/data/games.json');
const gamesFilePath = path.join(__dirname, "..", "data", "games.json");
let games = JSON.parse(content).map(Game.createFromObject);
//console.table(games);

function getGames() {
    return games;
}

function getGameById(uuid) {
    return games.find(game => game._uuid === uuid);
}

function readGamesFromFile() {
    try {
        const data = fs.readFileSync(gamesFilePath, 'utf8');
        return JSON.parse(data).map(Game.createFromObject);
    } catch (error) {
        console.error('Error reading games from file: ', error);
        return [];
    }
}

function writeGamesToFile(games) {
    try {
        fs.writeFileSync(gamesFilePath, JSON.stringify(games, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing games to file: ', error);
    }
}

function createGame(gameData) {
    return fetch('https://localhost:8000/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => console.error('Error:', error));
}

function updateGame(id, updatedGameData) {
    return fetch(`https://localhost:8000/games/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGameData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => console.error('Error:', error));
}

function deleteGame(id) {
    return fetch(`https://localhost:8000/games/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => console.error('Error:', error));
}

exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;