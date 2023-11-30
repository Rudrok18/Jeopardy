'use strict';

const fs = require('fs')
const Game = require('./game')

let content = fs.readFileSync('app/data/games.json');
let games = JSON.parse(content).map(Game.createFromObject);
//console.table(games);

function getGames() {
    return games;
}

function getGameById(uuid) {
    return games.find(game => game._uuid === uuid);
}

function createGame(game) {
    games.push(Game.createFromObject(game));
    
}

function updateGame(uuid, updatedGame) {
    //pending
}

function deleteGame(uuid) {
    const gameIndex = games.findIndex(game => game.uuid === uuid);
    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
    } else {
        throw new Error("Game not found")
    }
}

function findGame(query) {
    const [titleQuery] = query.split(':').map(item => item.trim());

    if (titleQuery) {
        return games.filter(game =>
            game.title.includes(titleQuery)
        );
    }
}

function genBoard(){
    //poner el título
    document.getElementById("GameTitle").textContent = games[0].title;
    //poner preguntas
}

document.addEventListener("DOMContentLoaded", function() {
    genBoard();
});

exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;