"use strict";

const fs = require('fs')
const Game = require('./game')

let content = fs.readFileSync('app/data/games.json');
let games = JSON.parse(fs.readFileSync("./app/data/games.json"));
const gameNow = games[0];

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

function genBoard(games){
  gameNow = games[0];
    return `
    <table width="100%">
    <thead>
      <h2 class="text-center" id="GameTitle">${gameNow._title}</h2>
      
    </thead>
    <tbody>
      <tr class="category">
        <td id="cat1">${gameNow.categories[0]}</td>
        <td id="cat2">${gameNow.categories[1]}</td>
        <td id="cat3">${gameNow.categories[2]}</td>
        <td id="cat4">${gameNow.categories[3]}</td>
        <td id="cat5">${gameNow.categories[4]}</td>
        <td id="cat6">${gameNow.categories[5]}</td>
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

function shModalQuestion(games){
  return `
  <div id="modal_questions" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="question">Question</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-primary" id="btnShowAns">Show answer</button>
          <p id="answer">Answer</p>
          <button type="button" class="btn btn-primary" id="btnCorrect">Correct</button>
          <button type="button" class="btn btn-primary" id="btnIncorrect">Incorrect</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `
}

exports.getGames = getGames;
exports.getGameById = getGameById;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;