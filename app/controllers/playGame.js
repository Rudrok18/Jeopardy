"use strict";

const fs = require('fs')
const Game = require('./game')

let currentQuestion = 0;
//el arreglo es para poder tener un registro de las preguntas que ya se jugaron y no poder volver a preguntarlas
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
//puntaje para cada equipo

function startGame(){
    currentQuestion = 0;
    score1 = 0;
    score2 = 0;
    score3 = 0;
    score4 = 0;
    score5 = 0;
    score6 = 0;
     
}



