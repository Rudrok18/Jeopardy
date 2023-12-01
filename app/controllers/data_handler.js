"use strict";

const fs = require('fs')
const Game = require('./game')

let content = fs.readFileSync('app/data/games.json');
let games = JSON.parse(fs.readFileSync("./app/data/games.json"));

console.table(games);

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

function genBoard(game){
    return `
    <table width="100%">
    <thead>
      <h2 class="text-center" id="GameTitle">${game._title}</h2>
      
    </thead>
    <tbody>
      <tr class="category">
        <td id="cat1">${game.categories[0]}</td>
        <td id="cat2">${game.categories[1]}</td>
        <td id="cat3">${game.categories[2]}</td>
        <td id="cat4">${game.categories[3]}</td>
        <td id="cat5">${game.categories[4]}</td>
        <td id="cat6">${game.categories[5]}</td>
      </tr> 
      <tr>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">400</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">300</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">200</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" data-toggle="modal" data-target="#modal_questions">100</button></td>
      </tr>
    </tbody>
    
  </table>
    `
}


exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;