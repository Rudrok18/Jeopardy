"use strict";

const fs = require('fs')
const Game = require('./game')
let points = 0;

function boardToHtml(game){
    return `
    <table width="100%">
    <thead>
      <h2 class="text-center" id="GameTitle">${game._title}</h2>
      
    </thead>
    <tbody>
      <tr class="category">
        <td>${game._categories[0].name}</td>
        <td>${game._categories[1].name}</td>
        <td>${game._categories[2].name}</td>
        <td>${game._categories[3].name}</td>
        <td>${game._categories[4].name}</td>
        <td>${game._categories[5].name}</td>
      </tr>
      <tr>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">400</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">300</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">200</button></td>
      </tr>
      <tr>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
        <td><button type="button" class="questions" onclick="changeColor(this)" data-toggle="modal" data-target="#modal_questions">100</button></td>
      </tr>
    </tbody>
    
  </table>
    `;
}

function modalQuestionToHtml(game){
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
          <button type="button" class="btn btn-primary" id="btnCorrect">Correct</button>
          <button type="button" class="btn btn-primary" id="btnIncorrect">Incorrect</button>
        </div>
      </div>
    </div>
  </div>
    `
}

function HtmlToGame(game){
    game._title = document.getElementById(GameTitle);

    game._categories[0]._name = document.getElementById(CatA);
    game._categories[1]._name = document.getElementById(CatB);
    game._categories[2]._name = document.getElementById(CatC);
    game._categories[3]._name = document.getElementById(CatD);
    game._categories[4]._name = document.getElementById(CatE);
    game._categories[5]._name = document.getElementById(CatF);

    game._categories[0]._questions[0] = document.getElementById(Preg1A);
    game._categories[0]._questions[1] = document.getElementById(Preg1B);
    game._categories[0]._questions[2] = document.getElementById(Preg1C);
    game._categories[0]._questions[3] = document.getElementById(Preg1D);
    game._categories[0]._questions[4] = document.getElementById(Preg1E);
    game._categories[0]._questions[5] = document.getElementById(Preg1F);

    game._categories[1]._questions[0] = document.getElementById(Preg2A);
    game._categories[1]._questions[1] = document.getElementById(Preg2B);
    game._categories[1]._questions[2] = document.getElementById(Preg2C);
    game._categories[1]._questions[3] = document.getElementById(Preg2D);
    game._categories[1]._questions[4] = document.getElementById(Preg2E);
    game._categories[1]._questions[5] = document.getElementById(Preg2F);

    game._categories[2]._questions[0] = document.getElementById(Preg3A);
    game._categories[2]._questions[1] = document.getElementById(Preg3B);
    game._categories[2]._questions[2] = document.getElementById(Preg3C);
    game._categories[2]._questions[3] = document.getElementById(Preg3D);
    game._categories[2]._questions[4] = document.getElementById(Preg3E);
    game._categories[2]._questions[5]= document.getElementById(Preg3F);

    game._categories[3]._questions[0] = document.getElementById(Preg4A);
    game._categories[3]._questions[1] = document.getElementById(Preg4B);
    game._categories[3]._questions[2] = document.getElementById(Preg4C);
    game._categories[3]._questions[3] = document.getElementById(Preg4D);
    game._categories[3]._questions[4] = document.getElementById(Preg4E);
    game._categories[3]._questions[5] = document.getElementById(Preg4F);

    game._categories[4]._questions[0] = document.getElementById(Preg5A);
    game._categories[4]._questions[1] = document.getElementById(Preg5B);
    game._categories[4]._questions[2]= document.getElementById(Preg5C);
    game._categories[4]._questions[3]= document.getElementById(Preg5D);
    game._categories[4]._questions[4] = document.getElementById(Preg5E);
    game._categories[4]._questions[5] = document.getElementById(Preg5F);

    game._categories[5]._questions[0] = document.getElementById(Preg6A);
    game._categories[5]._questions[1] = document.getElementById(Preg6B);
    game._categories[5]._questions[2] = document.getElementById(Preg6C);
    game._categories[5]._questions[3] = document.getElementById(Preg6D);
    game._categories[5]._questions[4] = document.getElementById(Preg6E);
    game._categories[5]._questions[5] = document.getElementById(Preg6F);

    return game;
}