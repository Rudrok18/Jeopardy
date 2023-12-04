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





