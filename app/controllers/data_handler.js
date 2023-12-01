"use strict";

const fs = require('fs');
const Game = require('./game');
const path = require("path");

let content = fs.readFileSync('app/data/games.json');
const gamesFilePath = path.join(__dirname, "..", "data", "games.json");
let games = JSON.parse(content).map(Game.createFromObject);
console.table(games);

function getGames() {
    return games;
}

function getGameById(uuid) {
    return games.find(game => game._uuid === uuid);
}

function readGamesFromFile() {
    try {
        const data = fs.readFileSync(gamesFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading games from file: ', error);
        return [];
    }
}

function writeGamesToFile() {
    try {
        fs.writeFileSync(gamesFilePath, JSON.stringify(games, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing games to file: ', error);
    }
}

function createGame(game) {
    const games = readGamesFromFile();
    games.push(newGame);
    writeGamesToFile(games);
    return newGame;
}

function updateGame(uuid, updatedGame) {
    const gameIndex = games.findIndex(game => game._uuid === uuid);

    if (gameIndex !== -1) {
        games[gameIndex] = {...games[gameIndex], ...updatedGame};
    } else {
        throw new Error("game not found");
    }
}

function deleteGame() {
    const gameIndex = games.findIndex(game => game.uuid === uuid);
    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
    } else {
        throw new Error("Game not found")
    }
}


exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;