'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require('fs');
const Game = require('./game');
const path = require("path");

const { generateUUID } = require("./utils");

const gamesFilePath = path.join(__dirname, "..", "data", "games.json");
console.log(gamesFilePath);

function readGamesFromFile() {
    try {
        const data = fs.readFileSync(gamesFilePath, 'utf8');
        console.table(data);
        return JSON.parse(data);
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

function getGames() {
    let data = readGamesFromFile();
    return data;
}

function getGameById(uuid) {
    const games = readGamesFromFile();
    return games.find(game => game.uuid === uuid);
}

function createGame(newGame) {
    const games = readGamesFromFile();
    newGame.uuid = generateUUID();
    games.push(newGame);
    writeGamesToFile(games);
    return newGame;
}

function updateGame(uuid, updatedGame) {
    const games = readGamesFromFile();
    const index = games.findIndex(game => game.uuid == uuid);
    if (index !== -1) {
        games[index] = { ...games[index], ...updatedGame };
        writeGamesToFile(games);
        return games[index];
    }
    return null;
}

function deleteGame(uuid) {
    const games = readGamesFromFile();
    const index = games.findIndex(game => game.uuid === uuid);
    if (index !== -1) {
        const deletedGame = games.splice(index, 1)[0];
        writeGamesToFile(games);
        return deletedGame;
    }
    return null;
}



exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;
