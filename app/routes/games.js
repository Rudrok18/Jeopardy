"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => {
        dataHandler.getGames();
    })

router.route('/games')
        .post((req, res) => {
            
        })

router.route('/:id')
    .get((req, res) => {

    })

module.exports = router;