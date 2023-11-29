"use strict";

const express = require('express');
const router = require('./app/controllers/router');
const app = express();
const port = 8000;
const path = require('path');

const routeStart = path.join(__dirname, 'app', 'views', 'start.html');
const routeNav = path.join(__dirname, 'app', 'views', 'nav.html');
const routeMy_Games = path.join(__dirname, 'app', 'views', 'my_games.html');
const routeGame_Editor = path.join(__dirname, 'app', 'views', 'game_editor.html');
const routeEdit_Page = path.join(__dirname, 'app', 'views', 'edit_page.html');
const routePrep = path.join(__dirname, 'app', 'views', 'prep.html');
const routeBoard = path.join(__dirname, 'app', 'views', 'board.html');

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Jeopardy listening on port ${port}!`);
})

/*
router.route('/:id')
    .get((req, res) => {
        
    })

router.route('/,/start')
    .get((req, res) => {
        res.status(200).sendFile(routeStart);
    })

router.route('/,/nav')
    .get((req, res) => {
        res.status(200).sendFile(routeNav);
    })

router.route('/,/my_games')
    .get((req, res) => {
        res.status(200).sendFile(routeMy_Games);
    })

router.route('/,/game_editor')
    .get((req, res) => {
        res.status(200).sendFile(routeGame_Editor);
    })

router.route('/,/edit_page')
    .get((req, res) => {
        res.status(200).sendFile(routeEdit_Page);
    })

router.route('/,/prep')
    .get((req, res) => {
        res.status(200).sendFile(routePrep);
    })

router.route('/,/board')
    .get((req, res) => {
        res.status(200).sendFile(routeBoard);
    })

module.exports = router;
*/